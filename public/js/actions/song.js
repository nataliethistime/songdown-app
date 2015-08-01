'use strict';

var Reflux = require('reflux');

var SongActions = Reflux.createActions([
  'load',
  'clear',
  'setSource'
]);

module.exports = SongActions;
