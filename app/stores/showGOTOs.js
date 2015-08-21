'use strict';

var Reflux = require('reflux');

var ToolboxActions = require('./../actions/toolbox');

var storedBool = require('./mixins/storedBool');

var ShowdGOTOsStore = Reflux.createStore({
  listenables: ToolboxActions,

  mixins: [
    storedBool('showdGOTOs', 'onToggleGOTOs', true)
  ]
});

module.exports = ShowdGOTOsStore;
