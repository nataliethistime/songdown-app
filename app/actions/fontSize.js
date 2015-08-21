'use strict';

var Reflux = require('reflux');

var FontSizeActions = Reflux.createActions([
  'increase',
  'decrease',
  'reset'
]);

module.exports = FontSizeActions;
