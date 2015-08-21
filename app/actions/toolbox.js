'use strict';

var Reflux = require('reflux');

var ToolboxActions = Reflux.createActions([
  'toggleChords',
  'toggleComments',
  'toggleGOTOs',
  'toggleVideo'
]);

module.exports = ToolboxActions;
