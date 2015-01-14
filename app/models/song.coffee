'use strict'

_ = require 'lodash'
{ncp} = require 'ncp'
del = require 'del'
down = require 'download-github-repo'
extfs = require 'extfs'
fs = require 'fs'
glob = require 'glob'
path = require 'path'
normalizeNewline = require 'normalize-newline'

Document = require 'songdown-compiler'


class Song
  constructor: (fname, @songDir) ->

    [@fname, @location, @artist, @track] = @handleNames fname

  # Given 'Hillsong - Our God.songdown' - returns: [fname, location, artist, track] where:
  # fname    => 'Hillsong - Our God.songdown'
  # location => 'full/path/to/Hillsong - Our God.songdown'
  # artist   => 'Hillsong'
  # track    => 'Our God'
  handleNames: (fname) ->
    track = fname.replace(/\.songdown$/, '').split '-'
    artist = track.shift().trim()
    track = track.join ''
    location = path.join @songDir, fname

    [fname.trim(), location, artist.trim(), track.trim()]

  # The Node docs state fs.exists() to be an anti-pattern. This is because the files can change
  # between checking and opening. It would be better to just open the file and handle the error.
  # However, the songs diretory will never change during the running of the app and doing latter
  # implementation would result in the need of a callback or a try/catch. This is much easer and
  # won't actually cause the problems specified in the docs. :)
  exists: -> fs.existsSync @location

  loadSongs: (songDir) ->

    songs = {}
    files = glob.sync '*.songdown', cwd: songDir

    _.each files, (name) ->
      song = new Song name, songDir
      songs[song.artist] ?= []
      songs[song.artist].push song.names

    songs

  toHtml: ->
    text = normalizeNewline fs.readFileSync(@location).toString()
    doc = new Document text
    doc.toHtml()


module.exports = Song
