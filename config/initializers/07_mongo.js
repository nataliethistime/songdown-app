'use strict';

var mongoose = require('mongoose');

module.exports = function(done) {
  mongoose.connect('mongodb://localhost/test');

  var db = mongoose.connection;
  var self = this;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function(callback) {
    self.set('db', db);
    done();
  });
}
