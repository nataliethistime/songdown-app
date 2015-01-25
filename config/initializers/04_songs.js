'use strict';

var _ = require('lodash');
var ncp = require('ncp').ncp;
var del = require('del');
var down = require('download-github-repo');
var extfs = require('extfs');

var path = require('path');

module.exports = function(callback) {

  console.log('Initializing the song cache.');
  var songDir = this.get('songDir');

  // Clear out the songs dir. Ignore '.git' because it has Symlinks which Windows can't handle.
  del.sync(['*', '*.*', '!.git', '!.gitignore'], {
    cwd: songDir
  });

  var localSongsPath = path.join(__dirname, '..', '..', '..', 'songdown-songs');

  if (!extfs.isEmptySync(localSongsPath)) {
    console.log('Local songdown-songs repo detected, using it.');

    // Use negative look-ahead to ignore .git and copy everything else.
    var opts = {filter: /^(?!.*\.git)/};
    ncp(localSongsPath, songDir, opts, function(err) {
      if (err != null) {
        throw err;
      }
      callback();
    });

  } else {

    console.log('Downloading songdown-songs from Github.');

    down('1Vasari/songdown-songs', songDir, function() {
      // Only throwing the error if the songDir is empty allows the server to be run offline, using
      // files from a previous run when online.
      if (err && extfs.isEmptySync(songDir)) {
        throw err;
      }
      callback();
    });
  }
};
