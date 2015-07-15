'use strict';

var Reflux = require('reflux');
var $ = require('jquery');
var _ = require('lodash');

var CollectionActions = require('js/actions/collection');

var CollectionStore = Reflux.createStore({
  listenables: CollectionActions,

  onLoad: function() {

    var handleData = function(data, textStatus, jqXHR) {
      if (textStatus === 'success') {
        console.log('Received data:', data);
        this.trigger(data);
      } else {
        // TODO: Show a proper error to the user.
        alert('Error getting artists');
        console.error('Error getting artists.');
        console.error(data);
        console.error(textStatus);
        console.error(jqXHR);
      }
    };

    $.get('/api/getCollection', _.bind(handleData, this), 'json');
  },

  onClear: function() {
    this.trigger({});
  }
});

module.exports = CollectionStore;
