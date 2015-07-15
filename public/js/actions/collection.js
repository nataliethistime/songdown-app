'use strict';

var Reflux = require('reflux');

var CollectionActions = Reflux.createActions([
  'load',
  'clear'
]);

module.exports = CollectionActions;
