'use strict';

var GeoPattern = require('geopattern');
var randomString = require('randomstring').generate;
var $ = require('jquery');

function generateBackground() {
  var pattern = GeoPattern.generate(randomString(Math.random() * Math.random() * 100));
  $('body').css('background-image', pattern.toDataUrl());
}

var interval = null;
function resetInterval() {
  clearInterval(interval);
  interval = setInterval(generateBackground, 60 * 1000);
}

$(document).ready(function() {
  // Do the background thang.
  generateBackground();
  resetInterval();
  $(document).scroll(resetInterval);
});
