'use strict';

var Reflux = require('reflux');

var TransposeActions = Reflux.createActions([
  'transposeUp',
  'transposeDown',
  'reset'
]);

module.exports = TransposeActions;
