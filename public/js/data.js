'use strict';

// This web app uses one json file to function. This module is responsible for getting and storing
// that data and sending it through whenever it's needed.

var $ = require('jquery');
var _ = require('lodash');

// This URL may change. In which case, we're stuffed.
var JSON_URL = 'https://raw.githubusercontent.com/1vasari/songdown-songs/master/songs.json';

var data;

var handleCallback = function(cb, data, scope) {
  data = data;
  cb.call(scope, data);
}

var getData = function(cb, scope) {

  scope = scope || window;

  // Don't make calls if we already have data.
  if (data) {
    handleCallback(cb, data, scope);
  }

  var handleData = function(data, textStatus, jqXHR) {
    if (textStatus === 'success') {
      console.log('Received data:', data);
      handleCallback(cb, data, scope);
    } else {
      // TODO: Show a proper error to the user.
      alert('Error getting data');
      console.error('Error getting data.');
      console.error(data);
      console.error(textStatus);
      console.error(jqXHR);
    }
  };

  $.get(JSON_URL, _.bind(handleData, this), 'json');
};

module.exports = getData;
