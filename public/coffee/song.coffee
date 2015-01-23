'use strict'

$ = require 'jquery'
Song = require 'songdown-compiler'
transpose = require 'songdown-transpose'

FONT_SIZE = 16
FADE_TIME = 300

THEMES = window.THEMES


init = ->
  $ '#fontSize'
    .attr 'value', FONT_SIZE
  setFontSize FONT_SIZE

  # Initialize the theme selector.
  $el = $ '#themeSelector'
  $el.append "<option value=\"#{theme.url}\">#{theme.name}</option>" for theme in THEMES

  initSong()
  initEvents()
  initTheme()
  showContent()


initSong = ->
  # Compile the thing.
  song = new Song window.SOURCE
  $ '#song'
    .html song.toHtml()

initEvents = ->
  $ '#fontSize'
    .off()
    .on 'change', ->
      setFontSize parseInt $(this).val(), 10


  $ '#viewSelector'
    .off()
    .on 'change', ->
      changeViewMode parseInt $(this).val(), 10


  $ '#themeSelector'
    .off()
    .on 'change', ->
      changeTheme $(this).val()


  previous = 0
  $ '#transposeSelector'
    .off()
    .on 'change', ->

      val = parseInt $(this).val(), 10
      increment = val - previous
      previous = val

      $('#song').fadeOut FADE_TIME, ->

        $ '.verse-chords'
          .each ->
            line = $(@).text().replace /\S+/g, (match) -> transpose match, increment
            $(@).html line

        $(this).fadeIn FADE_TIME


  # Note: a CSS media query handles the hiding of the sidebar and making
  #   sure that none of the verses are cut across pages.
  $ '#printButton'
    .off()
    .on 'click', (event) ->
      event.preventDefault()
      window.print()

  $ '#editButton'
    .off()
    .click (event) ->
      # We're outta here!
      url = window.location.href
      window.location.assign url.replace(/\/song\//, '/edit/')


initTheme = ->
  changeTheme localStorage.lastUsedTheme or THEMES[0].url


showContent = ->
  $ '#song'
    .fadeIn FADE_TIME


setFontSize = (size = FONT_SIZE) ->
  $ '#song'
    .css 'font-size', "#{size}px"


changeViewMode = (num) ->
  switch num
    # Show lyrics and chords
    when 0
      $ '.verse-chords, .verse-lyrics'
        .fadeIn FADE_TIME

    # Show lyrics
    # Hide chords
    when 1
      $ '.verse-chords'
        .fadeOut FADE_TIME
      $ '.verse-lyrics'
        .fadeIn FADE_TIME


changeTheme = (url) ->

  # Make sure the value stored in localStorage actually is a theme we can use.
  el = $('option', '#themeSelector').filter(->
    $(this).val() is url
  )[0]

  return unless el?

  # Set it as the selected value.
  $ el
    .attr 'selected', true

  # Store for next time.
  localStorage.lastUsedTheme = url
  $ '#themeCssElement'
    .attr 'href', url


$ window.document
  .ready -> init()
