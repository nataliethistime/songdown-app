'use strict'

GeoPattern = require 'geopattern'
$ = require 'jquery'
randomString = require('randomstring').generate

generateBackground = ->
  pattern = GeoPattern.generate randomString Math.random() * Math.random() * 100
  $ 'body'
    .css 'background-image', pattern.toDataUrl()


interval = null
resetInterval = ->
  clearInterval interval
  interval = setInterval generateBackground, 60 * 1000


init = ->

  # Do the background thang.
  generateBackground()
  resetInterval()
  $ document
    .scroll resetInterval


$ document
  .ready -> init()
