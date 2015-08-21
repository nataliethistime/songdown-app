# songdown-app

This is the web application component of the Songdown project.

[![Code Climate](https://codeclimate.com/github/1vasari/songdown-app/badges/gpa.svg)](https://codeclimate.com/github/1vasari/songdown-app)
[![Dependency Status](https://david-dm.org/1vasari/songdown-app.svg)](https://david-dm.org/1vasari/songdown-app)

# Changes

### 1.0.0
- **MASSIVE** improvements to the start-up time of the app.
- Force HTTPS in the entire app.
- Implemented a `youtube` front matter option for including a video inline with a song.
- Implemented displaying the key of the current song.
- Implemented increasing and decreasing of font size in the song view.
- Implemented new front-end using React. :+1:
- Implemented printing of a song. (Only works on Chrome)
- Implemented setting the title of document to the currently selected song.
- Implemented showing/hiding of chords, comments and GOTOs and YouTube video in the song view.
- Removed jQuery.
- Removed Locomotive.
- Refactored *everything*.

### 0.1.5 (2015-02-14)
- Implemented printing from the "edit song" page.

### 0.1.4 (2015-02-14)
- Fixed an issue where words inside brackets in chord lines were incorrectly being dealt with when transposing.

### 0.1.3 (2015-02-14)
- Removed the release and deploy script. #dumbidea
- Fixed transposing of chords when there were brackets involved.

### 0.1.1 (2015-02-13)
- Added a 404 page for requests that don't go through.
- Added a script which releases and deploys the site to Github and Heroku respectively.

### 0.1.0 (2015-02-07)
- On the Edit page there is now a link to `The Songdown Syntax` wiki page.
- Included a copy of the changes made to this code base before the migration to the Locomotive.js library occurred.
- Correct the format of some of the dates in the changes log.
- Other subtle changes which only I will care about.

### 0.0.4 (2015-01-29)
- Split the CSS for the index page and the song page.
- Fixed trying to go to `/edit` (without specifying a song name) as it was throwing undefined errors and all that jazz.
- Made the default front size for the editor that same as the song view (16 pixels).
- Browserify no longer parses jQuery because there are no `require()` calls in the jQuery source.
- Fixed incorrect rendering of `GOTO`'s in the song view.
- Redesigned the index page.

### 0.0.3 (2015-01-25)
- Use Browserify to bundle dependencies in the front-end.
- Added a `.gitignore` file to not track the Browserified files.
- Added a "Fork me on Github" badge to the index page.
- Implemented the *Songdown Editor* which is a side by side editor and preview page, making it really easy to mess with the Songdown syntax.
- Compile the song into HTML on the client side.
- Moved the transpose code to a separate module. Shortened the song view's Coffee code by about 40 lines. Smooth.
- Remove anchors in the song view.
- Removed all CoffeeScript code from the entire project!!

### 0.0.1 (2015-01-18)
- Initial moving of the application from an Express application to a Locomotive app. Note: most things are not really tested in the new environment, most likely there are a lot of bugs lurking.

# Old Changes

The following is the changes log form the old version of the Songdown web application before the change to Locomotive.js, which was when I restructured the entire application and started the version number afresh.

### 1.2.1
- Fixed errors when a song didn't exist.
- Remove some useless stuff.
- Fixed up some bad code. :D

### 1.2.0 (2014/11/20)
- Implemented using of a local version of songdown-songs if available. Essentially allowing off-line editing of songdown files which can then be pushed to Github when ready.
- Fixed a bug where a split chord would cause transposing to fail.
- Fixed a bug where verses were split across pages when printing.
- More cleaning of HTML so that debugging is easier.
- Created quick launch script.

### 1.1.0 (2014/11/11)
- Implemented the transpose feature.
- Started updating the version number in the package file (oops!).

### 1.0.1 (2014/11/01)
- Adjusted the way the front-end site loads needed files.
- Force the site to use SSL in production mode.
- Massive changes to the internal setup of the site.
- Added placeholder for the transpose feature.

### 1.0.0 (2014/10/25)
- Initial version

# License

This project is made with love, under the MIT license, by [@1vasari](https://twitter.com/1vasari). :heart:
