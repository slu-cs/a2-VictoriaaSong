// Store some data in the faculty database

const mongoose = require('mongoose');

// import the model from other files
const connect = require('./voters.csv');
const Voter = require('./schema');

connect();  // To the database

// Create some faculty


// Delete any previous data
mongoose.connection.dropDatabase()
  /*
  .then(function() {
    return harcourt.save();
  });
  */

  // Save the new data
  // Run a callback incase mongoose is closed before the data is saved
  
  .then(() => mongoose.connection.close())
  .then(() => console.log('Database is ready.'))
  .catch(error => console.error(error.stack));
