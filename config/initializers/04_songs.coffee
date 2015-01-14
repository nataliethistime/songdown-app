'use strict'

_ = require 'lodash'
{ncp} = require 'ncp'
del = require 'del'
down = require 'download-github-repo'
extfs = require 'extfs'

path = require 'path'

module.exports = (callback) ->

  console.log 'Initializing the song cache.'

  # Clear out the songs dir. Ignore '.git' because it has Symlinks which Windows can't handle.
  del.sync ['*', '*.*', '!.git', '!.gitignore'], {cwd: @get 'songDir'}

  localSongsPath = path.join __dirname, '..', '..', '..', 'songdown-songs'

  if not extfs.isEmptySync localSongsPath
    console.log 'Local songdown-songs repo detected, using it.'

    # Use negative look-ahead to ignore .git and copy everything else.
    opts = {filter: /^(?!.*\.git)/}
    ncp localSongsPath, @get('songDir'), opts, (err) =>
      # I don't really know when or how this could happen, but I guess we'll see... :P
      throw err if err?

      callback()

  else
    console.log 'Downloading songdown-songs from Github.'

    down '1Vasari/songdown-songs', @get('songDir'), (err) =>

      if err and extfs.isEmptySync @get 'songDir'
        throw new Error err

      callback()
