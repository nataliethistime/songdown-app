'use strict';

var autosize = require('jquery-autosize');
var Song = require('songdown-compiler');

var FADE_TIME = 500;

function save() {
  var data = {
    song: {
      source: $('#editor').val(),
      artist: $('#artist').val(),
      track: $('#track').val()
    }
  };

  var url = window.location.origin + '/api/setSong';
  request
    .post(url, {json: true, form: data}, function(err, res, body) {
      console.log(body);
      if (body.success) {
        alert('Saved!');
      } else {
        console.log('Error!');
      }
    });
}

function loadSource(callback) {
  var artist = window.ARTIST;
  var track = window.TRACK;

  if (!artist || !track) {
    callback();
    return;
  }

  var params = {
    json: true,
    form: {
      song: {
        artist: artist,
        track: track
      }
    }
  };

  request
    .post(window.location.origin + '/api/getSong', params, function(err, res, body) {
      console.log(body);
      if (!body || !body.source) {
        updateEditor("**Hello! You're making a new song!**");
        updateViewsCount(0);
      } else {
        updateEditor(body.source);
        updateViewsCount(body.views);
      }
      callback();
    });
}

function updateEditor(source) {
  $('#editor').html(source);
  updatePreview(source);
}

function updatePreview(source) {
  var source = (source || $('#editor').val()) || '';
  $('#preview').html(new Song(source).toHtml());
}

function updateViewsCount(count) {
  $('#viewsCount').html(count);
}

$(document).ready(function() {
  $('#editor, #preview').hide();

  loadSource(function() {
    $('#saveButton').click(save);
    $('#editor').autosize().keyup(updatePreview);
    $('#editor, #preview').fadeIn(FADE_TIME);
    $('#editor').trigger('autosize.resize');
  });
});
