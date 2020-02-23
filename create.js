// Store some data in the faculty database

const mongoose = require('mongoose');

const connect = require('./db');
const Voter = require('./schema');

connect();  // To the database

const fs = require('fs');
const readline = require('readline');
const file = readline.createInterface({
  input: fs.createReadStream('voters.csv')
});


const voters = [];

file.on('line', function(line) {
  const columns = line.split(',');
  const eachVoter = new Voter({
    firstName: columns[0],
    lastName: columns[1],
    zipCode: Number(columns[2]),
    historyString: columns[3]
  });
  voters.push(eachVoter);
});

file.on('close', function(){
  mongoose.connection.dropDatabase()

    Promise.all(voters.map(d => d.save()))

      .then(() => mongoose.connection.close())
      .then(() => console.log('Database is ready.'))
      .catch(error => console.error(error.stack));

});




// mongoose.connection.dropDatabase()
//
//   .then(() => Promise.all(voters.map(d => d.save())))
//   .then(() => mongoose.connection.close())
//   .then(() => console.log('Database is ready.'))
//   .catch(error => console.error(error.stack));
