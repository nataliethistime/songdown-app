# songdown-app

This is the web application component of the Songdown project.

[![Code Climate](https://codeclimate.com/github/1vasari/songdown-app/badges/gpa.svg)](https://codeclimate.com/github/1vasari/songdown-app)
[![Dependency Status](https://david-dm.org/1vasari/songdown-app.svg?style=flat-square)](https://david-dm.org/1vasari/songdown-app)

# Changes

### 0.0.4 (2015-1-29)
- Split the CSS for the index page and the song page.
- Fixed trying to go to `/edit` (without specifying a song name) as it was throwing undefined errors and all that jazz.
- Made the default front size for the editor that same as the song view (16 pixels).
- Browserify no longer parses jQuery because there are no `require()` calls in the jQuery source.
- Fixed incorrect rendering of `GOTO`'s in the song view.
- Redesigned the index page.

### 0.0.3 (2015-1-25)
- Use Browserify to bundle dependencies in the front-end.
- Added a `.gitignore` file to not track the Browserified files.
- Added a "Fork me on Github" badge to the index page.
- Implemented the *Songdown Editor* which is a side by side editor and preview page, making it really easy to mess with the Songdown syntax.
- Compile the song into HTML on the client side.
- Moved the transpose code to a separate module. Shortened the song view's Coffee code by about 40 lines. Smooth.
- Remove anchors in the song view.
- Removed all CoffeeScript code from the entire project!!

### 0.0.1 (2015-1-18)
- Initial moving of the application from an Express application to a Locomotive app. Note: most things are not really tested in the new environment, most likely there are a lot of bugs lurking.

# License

This project is made with :heart: under the MIT license by Nathan McCallum.
