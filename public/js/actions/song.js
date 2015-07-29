'use strict';

var Reflux = require('reflux');

var SongActions = Reflux.createActions([
  'load',
  'setSource'
]);

module.exports = SongActions;
