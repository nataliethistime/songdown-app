'use strict'

_ = require 'lodash'
{Controller} = require 'locomotive'
module.exports = new Controller()

Song = require '../models/song'

module.exports.index = ->
  @title = 'Songdown Collection'
  @songs = Song::loadSongs @app.get 'songDir'
  @render()


module.exports.song = ->
  song = new Song @param('fname'), @app.get 'songDir'
  {@fname, @artist, @track} = song
  @source = song.prepareSource()
  this.render()

# module.exports.edit = ->
  # Do Stuff!
