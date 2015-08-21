'use strict';

var Reflux = require('reflux');

var ToolboxActions = require('./../actions/toolbox');

var storedBool = require('./mixins/storedBool');

var ShowCommentsStore = Reflux.createStore({
  listenables: ToolboxActions,

  mixins: [
    storedBool('showComments', 'onToggleComments', true)
  ]
});

module.exports = ShowCommentsStore;
