// Store some data in the faculty database

const mongoose = require('mongoose');
//const connect = require('./voters.csv');
const fs = require('fs');
const readline = require('readline');
const file = readline.createInterface({
  input: fs.createReadStream('majors.csv')
});
const Voter = require('./schema');

file();  // To the database


const queries = [

  // How many registered voters live in the Canton zip code (13617)?
  Voter.find().where('zipCode').equals(13617).count(),

  // What are the full names of all the registered voters whose first-name is STARR?
  Voter.find().where('firstName').equals('STARR'),

  // How many people voted in the 2016 general election (GE16)?
  Voter.find().where('firstName').in('GE16').count(),

  // What is the last-name that comes last in the county in alphabetical order?
  Voter.find().sort('-name').limit(1),

  // How many zip codes does the county contain?
  Voter.distinct('zipCode').count()


];

// Run the queries in parallel
Promise.all(queries)
  .then(function(results) {
    console.log('Number of registed voters live in Canton (zip code: 13617): ', results[0]);
    console.log('Full names of all the registered voters whose first-name is STARR: ', results[1].map(p => p.name));
    console.log('Number of people voted in the 2016 general election (GE16): ', results[2]);
    console.log('The last-name that comes last in the county in alphabetical order: ', results[3].map(p => p.name));
    console.log('Number of zip codes does the county contain: ', results[4]);
    mongoose.connection.close();
 }).catch(error => console.error(error.stack));
