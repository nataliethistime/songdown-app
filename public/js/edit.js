'use strict';

window.$ = window.jQuery = require('jquery');
var autosize = require('jquery-autosize');
var Song = require('songdown-compiler');
var Firebase = require('firebase');

var FADE_TIME = 500;

var firebase = new Firebase('https://songdown.firebaseio.com');
var songsRef = firebase.child('songs');

function save() {
  var data = {
    source: $('#editor').val(),
    artist: $('#artist').val(),
    track: $('#track').val()
  };

  var artistRef = songsRef.child(data.artist);
  var trackRef = artistRef.child(data.track);

  trackRef.update(data, function(err) {
    if (err) {
      throw err;
    }
    console.log('Done!');
  });
}

function loadSource(callback) {
  var artistRef = songsRef.child($('#artist').val());
  var trackRef = artistRef.child($('#track').val());

  trackRef.on('value', function(snapshot) {
    var data = snapshot.val();
    $('#editor').val(data.source);
    callback();
  });
}

function updatePreview() {
  var source = $('#editor').val();
  $('#preview').html(new Song(source).toHtml());
}

$(document).ready(function() {
  $('#editor').autosize().keyup(updatePreview);
  $('#editor, #preview').hide();

  loadSource(function() {
    updatePreview();
    $('#editor, #preview').fadeIn(FADE_TIME);
    $('#editor').trigger('autosize.resize');
    $('#saveButton').click(save);
  });
});
