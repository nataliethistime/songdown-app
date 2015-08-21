'use strict';

var Reflux = require('reflux');

var ThemeActions = require('./../actions/theme');

var storedString = require('./mixins/storedString');

var ThemeStore = Reflux.createStore({
  listenables: ThemeActions,

  mixins: [
    storedString('theme', 'onSet', 'default')
  ]
});

module.exports = ThemeStore;
