'use strict';

var autosize = require('jquery-autosize');
var Song = require('songdown-compiler');

var FADE_TIME = 500;

function save() {
  var data = {
    source: $('#editor').val(),
    artist: $('#artist').val(),
    track: $('#track').val(),
    views: 1
  };
}

function loadSource(callback) {
  var artist = $('#artist').val();
  var track = $('#track').val()

  if (!artist || !track) {
    callback();
    return;
  }

    // var data = snapshot.val();
    // $('#editor').val(data.source);
    // callback();
}

function updatePreview() {
  var source = $('#editor').val();
  $('#preview').html(new Song(source).toHtml());
}

$(document).ready(function() {
  $('#editor').autosize().keyup(updatePreview);
  $('#editor, #preview').hide();

  loadSource(function() {
    console.log('test')
    updatePreview();
    $('#editor, #preview').fadeIn(FADE_TIME);
    $('#editor').trigger('autosize.resize');
    $('#saveButton').click(save);
  });
});
