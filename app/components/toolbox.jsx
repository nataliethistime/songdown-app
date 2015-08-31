'use strict';

var React = require('react');
var Reflux = require('reflux');
var Radium = require('radium');
var _ = require('lodash');
var Uri = require('jsuri');
var params = require('query-params');

var FontSizeActions = require('./../actions/fontSize');
var ThemeActions = require('./../actions/theme');
var ToolboxActions = require('./../actions/toolbox');
var TransposeActions = require('./../actions/transpose');

var FontSizeStore = require('./../stores/fontSize');
var ShowChordsStore = require('./../stores/showChords');
var ShowCommentsStore = require('./../stores/showComments');
var ShowGOTOsStore = require('./../stores/showGOTOs');
var ShowVideoStore = require('./../stores/showVideo');
var SongStore = require('./../stores/song');
var ThemeStore = require('./../stores/theme');
var TransposeStore = require('./../stores/transpose');

var styles = require('./../styles');

var Toolbox = React.createClass({

  mixins: [
    Reflux.connect(FontSizeStore, 'fontSize'),
    Reflux.connect(ShowChordsStore, 'showChords'),
    Reflux.connect(ShowCommentsStore, 'showComments'),
    Reflux.connect(ShowGOTOsStore, 'showGOTOs'),
    Reflux.connect(ShowVideoStore, 'showVideo'),
    Reflux.connect(SongStore, 'song'),
    Reflux.connect(ThemeStore, 'theme'),
    Reflux.connect(TransposeStore, 'transpose')
  ],

  toggleChords: function(e) {
    e.preventDefault();
    ToolboxActions.toggleChords();
  },

  toggleComments: function(e) {
    e.preventDefault();
    ToolboxActions.toggleComments();
  },

  toggleGOTOs: function(e) {
    e.preventDefault();
    ToolboxActions.toggleGOTOs();
  },

  toggleVideo: function(e) {
    e.preventDefault();
    ToolboxActions.toggleVideo();
  },

  handleThemeChange: function(e) {
    ThemeActions.set(e.target.value);
  },

  generatePrintUrl: function() {
    var compilerOptions = {
      artist: this.state.song.artist,
      fontSize: this.state.fontSize,
      key: this.state.song.key,
      name: this.state.song.name,
      showChords: this.state.showChords,
      showComments: this.state.showComments,
      showGOTOs: this.state.showGOTOs,
      source: this.state.song.source,
      theme: this.state.theme,
      transpose: this.state.transpose
    };

    return new Uri(window.location.origin)
      .setPath('/print')
      .setQuery(params.encode(compilerOptions));
  },

  render: function() {
    return (
      <div style={styles.toolbox}>
        <p>
          Transpose <button type="button" onClick={TransposeActions.transposeUp}>+</button>
          <button type="button" onClick={TransposeActions.transposeDown}>-</button>
          <br />
          Font Size <button type="button" onClick={FontSizeActions.increase}>+</button>
          <button type="button" onClick={FontSizeActions.decrease}>-</button>
        </p>

        <p>
          Show Chords <input
            type="checkbox"
            checked={this.state.showChords}
            onChange={this.toggleChords}
          ></input>

          <br />

          Show Comments <input
            type="checkbox"
            checked={this.state.showComments}
            onChange={this.toggleComments}
          ></input>

          <br />

          Show GOTOs <input
            type="checkbox"
            checked={this.state.showGOTOs}
            onChange={this.toggleGOTOs}
          ></input>

          <br />

          Show Video <input
            type="checkbox"
            checked={this.state.showVideo}
            onChange={this.toggleVideo}
          ></input>
        </p>

        <p>
          Theme:
          <br />
          <select onChange={this.handleThemeChange}>
            <option value="default">Default</option>
          </select>
        </p>

        <p>
          <a href={this.generatePrintUrl()} target="_blank">Print!</a>
        </p>
      </div>
    );
  }
});

module.exports = Radium(Toolbox);
