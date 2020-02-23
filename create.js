// Store some data in the faculty database

const mongoose = require('mongoose');

// import the model from other files
//const connect = require('./voters.csv');

const connect = require('./db');
const Voter = require('./schema');

connect();  // To the database

const fs = require('fs');
const readline = require('readline');
const file = readline.createInterface({
  input: fs.createReadStream('voters.csv')
});


// Create voters database
const voters = [];
file.on('line', function(line) {
  const columns = line.split(',');
  voters.push({
    firstName: columns[0],
    lastName: columns[1],
    zipCode: Number(column[2]),
    historyString: columns[3]
  });
});

mongoose.connection.dropDatabase()

  .then(() => voters.save())
  .then(() => mongoose.connection.close())
  .then(() => console.log('Database is ready.'))
  .catch(error => console.error(error.stack));
