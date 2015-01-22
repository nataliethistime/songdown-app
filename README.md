# songdown-app

This is the web application component of the Songdown project. [![Dependency Status](https://david-dm.org/1vasari/songdown-app.svg?style=flat-square)](https://david-dm.org/1vasari/songdown-app)

# TO-DO (Just some random thoughts)
- Compile songdown on the client side.
- "View source" button on the song view (Hence we need to compile client side.)
- Songdown editor with preview on the side (Again, needing the ability to compile client side).
- Add support for PDF files (sheet music, I guess?)

# Changes

### 0.1.0
- Use Browserify to bundle dependencies in the front-end.
- Added a `.gitignore` file to not track the Browserified files.
- Remove anchors in the song view.
- Compile the song into HTML on the client side.

### 0.0.1 (2015-1-18)
- Initial moving of the application from an Express application to a Locomotive app. Note: most things are not really tested in the new environment, most likely there are a lot of bugs lurking.

# License

This project is made with :heart: under the MIT license by Nathan McCallum.

> Copyright (c) 2015 Nathan McCallum

> Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

> The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
