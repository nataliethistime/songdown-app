'use strict'

path = require 'path'


module.exports = ->

  staticDir = path.join __dirname, '../../public'
  @set 'staticDir', staticDir
  @set 'songDir', path.join staticDir, 'songs'
