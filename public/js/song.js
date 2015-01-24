'use strict';

var $ = require('jquery');
var _ = require('lodash');
var sprintf = require('sprintf-js').sprintf;

var Song = require('songdown-compiler');
var transpose = require('songdown-transpose');

var FONT_SIZE = 16;
var FADE_TIME = 300;

var THEMES = window.THEMES;


$(document).ready(function() {
  $('#fontSize').attr('value', FONT_SIZE);
  setFontSize(FONT_SIZE);

  // Initialize the theme selector.
  var $el = $('#themeSelector')
  _.each(THEMES, function(theme) {
    $el.append(sprintf('<option value="%s">%s</option>', theme.url, theme.name));
  });

  initSong();
  initEvents();
  initTheme();
  showContent();
});


function initSong() {
  // Compile the thing.
  var song = new Song(window.SOURCE);
  $('#song').html(song.toHtml());
}

function initEvents() {
  $('#fontSize').off().on('change', function() {
    setFontSize(parseInt($(this).val(), 10));
  });


  $('#viewSelector').off().on('change', function() {
    changeViewMode(parseInt($(this).val(), 10));
  });


  $('#themeSelector').off().on('change', function() {
    changeTheme($(this).val());
  });

  var previous = 0
  $('#transposeSelector').off().on('change', function() {
    var val = parseInt($(this).val(), 10);
    var increment = val - previous;
    previous = val;

    $('#song').fadeOut(FADE_TIME, function() {
      $('.verse-chords').each(function() {

        var line = $(this).text().replace(/\S+/g, function(match) {
          return transpose(match, increment);
        });

        $(this).html(line);
      });
      $(this).fadeIn(FADE_TIME)
    });
  });

  // Note: a CSS media query handles the hiding of the sidebar and making
  //   sure that none of the verses are cut across pages.
  $('#printButton').off().click(function(event) {
    event.preventDefault();
    window.print();
  });

  $('#editButton').off().click(function(event) {
    // We're outta here!
    var url = window.location.href;
    window.location.assign(url.replace(/\/song\//, '/edit/'));
  });
}

function initTheme() {
  changeTheme(localStorage.lastUsedTheme || THEMES[0].url);
}


function showContent() {
  $('#song').fadeIn(FADE_TIME);
}


function setFontSize(size) {
  size = parseInt(size, 10) || FONT_SIZE;
  $('#song').css('font-size', sprintf('%dpx', size));
}


function changeViewMode(num) {
  num = parseInt(num, 10);
  if (isNaN(num)) return;
  switch (num) {
    // Show lyrics and chords
    case 0:
      $('.verse-chords, .verse-lyrics').fadeIn(FADE_TIME);
      break;

    // Show lyrics
    // Hide chords
    case 1:
      $('.verse-chords').fadeOut(FADE_TIME);
      $('.verse-lyrics').fadeIn(FADE_TIME);
      break;

    // This shouldn't happen, but just in case.
    default:
      console.error(sprintf('Unexpected value of %d sent to changeViewMode()', num));
      $('.verse-chords, .verse-lyrics').fadeIn(FADE_TIME);
  }
}

function changeTheme(url) {

  // Make sure the value stored in localStorage actually is a theme we can use.
  var el = $('option', '#themeSelector').filter(function() {
    return $(this).val() === url;
  })[0];

  if (!el) return;

  // Set it as the selected value and load the theme's CSS.
  $(el).attr('selected', true);
  $('#themeCssElement').attr('href', url);

  // Store for next time.
  localStorage.lastUsedTheme = url;
}
