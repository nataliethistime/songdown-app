'use strict'

window.$ = window.jQuery = require 'jquery'
autosize = require 'jquery-autosize'
Song = require 'songdown-compiler'

updatePreview = ->
  source = $('#editor').val()
  $('#preview').html(new Song(source).toHtml())

init = ->
  $('#editor').autosize().trigger('autosize.resize').keyup(updatePreview)
  $('#preview').hide()
  updatePreview()
  $('#preview').fadeIn(500)

$ document
  .ready -> init()
