'use strict'

path = require 'path'


module.exports = ->

  publicDir = path.join __dirname, '../../public'
  @set 'publicDir', publicDir
  @set 'songDir', path.join publicDir, 'songs'
