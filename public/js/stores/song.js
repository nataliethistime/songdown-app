'use strict';

var Reflux = require('reflux');
var _ = require('lodash');
var $ = require('jquery');

var SongActions = require('js/actions/song');

var SongStore = Reflux.createStore({
  listenables: SongActions,

  onLoad: function(artist, name) {

    var handleData = function(data, textStatus, jqXHR) {
      if (textStatus === 'success') {
        console.log('Received song:', data);
        this.trigger(data.source);
      } else {
        // TODO: Show a proper error to the user.
        alert('Error getting song! :(');
        console.error('Error getting song.');
        console.error(data);
        console.error(textStatus);
        console.error(jqXHR);
      }
    };

    var url = '/api/getSong/' + artist + '/' + name;
    $.get(url, _.bind(handleData, this), 'json');
  }

});

module.exports = SongStore;
