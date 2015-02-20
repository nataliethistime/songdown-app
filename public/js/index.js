'use strict';

var GeoPattern = require('geopattern');
var randomString = require('randomstring').generate;

function generateBackground() {
  var pattern = GeoPattern.generate(randomString(Math.random() * Math.random() * 100));
  $('body').css('background-image', pattern.toDataUrl());
}

var interval = null;
function resetInterval() {
  clearInterval(interval);
  interval = setInterval(generateBackground, 60 * 1000);
}

function initBackground() {
  // Do the background thang.
  generateBackground();
  resetInterval();
  $(document).scroll(resetInterval);
}

function loadTopSongs() {
  var url = window.location.origin + '/api/getTopSongs';
  request
    .post(url, {json: true}, function(err, req, body) {
      console.log(body);
    });
}

$(document).ready(function() {
  initBackground();
  loadTopSongs();
});
