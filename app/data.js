'use strict';

// This web app uses one json file to function. This module is responsible for getting and storing
// that data and sending it through whenever it's needed.

var _ = require('lodash');
var Uri = require('jsuri');

var data;

var handleCallback = function(cb, serverData, scope) {
  data = serverData;
  cb.call(scope, serverData);
};

var newRequestObj = function() {
  if (typeof XMLHttpRequest !== 'undefined') {
    return new XMLHttpRequest();
  } else {
    return new window.ActiveXObject('Microsoft.XMLHTTP');
  }
};

var requestData = function(url, cb) {
  var httpRequest = newRequestObj();

  httpRequest.onreadystatechange = function() {
    if (httpRequest.readyState === 4 && httpRequest.status === 200) {
      cb(JSON.parse(httpRequest.responseText));
    }
  };

  // Cache-bust the url.
  var newUrl = new Uri(url)
    .addQueryParam('cacheBust', Date.now());

  httpRequest.open('GET', newUrl, true);
  httpRequest.send();
};

var getData = function(cb, scope) {

  scope = scope || window;

  // Don't make calls if we already have data.
  if (data) {
    handleCallback(cb, data, scope);
  } else {
    requestData(window.SONGDOWN_JSON_URL, function(serverData) {
      handleCallback(cb, serverData, scope);
    });
  }
};

module.exports = getData;
