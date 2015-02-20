'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
  artist: String,
  track: String,
  source: String,
  views: Number
});

module.exports = mongoose.model('Song', schema);
