// Store some data in the faculty database

const mongoose = require('mongoose');

// import the model from other files
//const connect = require('./voters.csv');
const fs = require('fs');
const readline = require('readline');
const file = readline.createInterface({
  input: fs.createReadStream('majors.csv')
});
const Voter = require('./schema');

file();  // To the database

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


  // Save the new data
  // Run a callback incase mongoose is closed before the data is saved

  .then(() => mongoose.connection.close())
  .then(() => console.log('Database is ready.'))
  .catch(error => console.error(error.stack));
