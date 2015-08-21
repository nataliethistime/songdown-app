'use strict';

var Reflux = require('reflux');

var ToolboxActions = require('./../actions/toolbox');

var storedBool = require('./mixins/storedBool');

var ShowChordsStore = Reflux.createStore({
  listenables: ToolboxActions,

  mixins: [
    storedBool('showChords', 'onToggleChords', true)
  ]
});

module.exports = ShowChordsStore;
