'use strict'

_ = require 'lodash'
glob = require 'glob'
normalizeNewline = require 'normalize-newline'

fs = require 'fs'
path = require 'path'


class Song
  constructor: (fname, @songDir) ->

    [@fname, @location, @artist, @track] = @handleNames fname
    @names = {@fname, @location, @artist, @track}

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

    _.each files, (fname) ->
      song = new Song fname, songDir
      songs[song.artist] ?= []
      songs[song.artist].push song.names

    songs

  prepareSource: ->
    source = normalizeNewline fs.readFileSync(@location).toString()

    # Fix up the new lines in the file so that the source can be inserted into the client via a
    # JavaScript string. Not exactly sure why this works. :/
    source.replace /\n/g, '\\n'


module.exports = Song
