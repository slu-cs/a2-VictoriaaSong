const mongoose = require('mongoose');

// Export this function
module.exports = function(){

  // Avoid warnings
  mongoose.set('useNewUrlParser', true);
  mongoose.set('useUnifiedTopology', true);
  mongoose.set('useCreateIndex', true);
  mongoose.set('useFindAndModify', false);

  // Start connecting
  mongoose.connect('mongodb://localhost/voters.csv');

  // Make sure we see any errors
  mongoose.connection.on('error', function(error) {
    console.error(error.stack);
  });
};
