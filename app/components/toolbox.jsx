'use strict';

var React = require('react');
var Reflux = require('reflux');
var Radium = require('radium');
var _ = require('lodash');

var FontSizeActions = require('./../actions/fontSize');
var ThemeActions = require('./../actions/theme');
var ToolboxActions = require('./../actions/toolbox');
var TransposeActions = require('./../actions/transpose');

var ShowChordsStore = require('./../stores/showChords');
var ShowCommentsStore = require('./../stores/showComments');
var ShowGOTOsStore = require('./../stores/showGOTOs');
var ShowVideoStore = require('./../stores/showVideo');

var styles = require('./../styles');

var Toolbox = React.createClass({

  mixins: [
    Reflux.connect(ShowChordsStore, 'showChords'),
    Reflux.connect(ShowCommentsStore, 'showComments'),
    Reflux.connect(ShowGOTOsStore, 'showGOTOs'),
    Reflux.connect(ShowVideoStore, 'showVideo')
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

  print: function() {
    var isChrome = navigator.userAgent.toLowerCase().indexOf('chrome') > -1;

    if (isChrome) {
      _.defer(window.print);
    } else {
      // This is caused by a limitation in Radium, see:
      // https://github.com/FormidableLabs/radium/issues/132

      var msg = [
        'ATTENTION:',
        'Due to an issue in your browser, printing will not work. :(',
        'Please use Google Chrome for printing from this site.'
      ];

      alert(msg.join('\n'));
    }
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
          <button type="button" onClick={this.print}>Print</button>
        </p>
      </div>
    );
  }
});

module.exports = Radium(Toolbox);
