'use strict';

// This script assumes that `songdown-songs` and `songdown-app` are cloned into the same directory.
// If this is so, then the songs.json file inside `songdown-songs` can simply be copied into
// our `static` directory and be used by the app. This allows the app to function offline,
// which I sometimes need.

var path = require('path');
var fs = require('fs');

var copyFile = require('quickly-copy-file');

var songdownSongsLocation = path.join(__dirname, '../../songdown-songs');
var destination = path.join(__dirname, '../public/songs.json');

if (fs.existsSync(songdownSongsLocation)) {
  console.log('Generating and using a local songs.json instead of downloading from Github.');

  // Before copying the songs.json, generate a new one.
  require(path.join(songdownSongsLocation, 'packager'));

  copyFile(path.join(songdownSongsLocation, 'songs.json'), destination, function(err) {
    if (err) {
      throw err;
    }
  });
} else {
  console.log("No local songs.json found - we'll need to download it from Github!");
}
