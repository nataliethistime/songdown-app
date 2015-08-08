'use strict';

// This script assumes that `songdown-songs` and `songdown-app` are cloned into the same directory.
// If this is so, then the songs.json file inside `songdown-songs` can simply be copied into
// our `static` directory and be used by the app. This allows the app to function offline,
// which I sometimes need.

var path = require('path');
var fs = require('fs');

var copyFile = require('quickly-copy-file');

var songsLocation = path.join(__dirname, '../../songdown-songs/songs.json');
var to = path.join(__dirname, '../public/songs.json');

if (fs.existsSync(songsLocation)) {
  console.log('Using a local songs.json instead of downloading from Github.');

  copyFile(songsLocation, to, function(err) {
    if (err) {
      throw err;
    }
  });
} else {
  console.log("No local songs.json found - we'll need to download it from Github!");
}
