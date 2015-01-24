'use strict';

window.$ = window.jQuery = require('jquery');
var autosize = require('jquery-autosize');
var Song = require('songdown-compiler');

function updatePreview() {
  var source = $('#editor').val();
  $('#preview').html(new Song(source).toHtml());
}

$(document).ready(function() {
  $('#editor').autosize().trigger('autosize.resize').keyup(updatePreview);
  $('#preview').hide();
  updatePreview();
  $('#preview').fadeIn(500);
});
