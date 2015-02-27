'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
  artist: String,
  track: String,
  source: String,
  views: Number
});
schema.index({artist: 'text', track: 'text'})

module.exports = mongoose.model('Song', schema);
