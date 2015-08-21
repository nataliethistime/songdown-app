'use strict';

var Reflux = require('reflux');

var ToolboxActions = require('./../actions/toolbox');

var storedBool = require('./mixins/storedBool');

var ShowVideoStore = Reflux.createStore({
  listenables: ToolboxActions,

  mixins: [
    storedBool('showVideo', 'onToggleVideo', false)
  ]
});

module.exports = ShowVideoStore;
