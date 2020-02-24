const mongoose = require('mongoose');

const Voter = new mongoose.Schema({

  firstName: String,
  lastName: String,
  zipCode: Number,
  historyString: String

});

Voter.index({firstName: 1})
Voter.index({lastName: 1});
Voter.index({zipCode: 1});
Voter.index({historyString: 1});

module.exports = mongoose.model('Voter', Voter);
