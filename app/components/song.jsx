'use strict';

var React = require('react');
var Reflux = require('reflux');

var FontSizeActions = require('./../actions/fontSize');
var TransposeActions = require('./../actions/transpose');
var SongActions = require('./../actions/song');

var FontSizeStore = require('./../stores/fontSize');
var SongStore = require('./../stores/song');
var TransposeStore = require('./../stores/transpose');
var ShowChordsStore = require('./../stores/showChords');
var ShowCommentsStore = require('./../stores/showComments');
var ShowGOTOsStore = require('./../stores/showGOTOs');
var ThemeStore = require('./../stores/theme');

var Compiler = require('songdown-compiler');

var Box = require('./box');
var Key = require('./key');
var Toolbox = require('./toolbox');
var Youtube = require('./youtube');

var Song = React.createClass({

  mixins: [
    Reflux.connect(SongStore, 'song'),
    Reflux.connect(TransposeStore, 'transpose'),
    Reflux.connect(FontSizeStore, 'fontSize'),
    Reflux.connect(ShowChordsStore, 'showChords'),
    Reflux.connect(ShowCommentsStore, 'showComments'),
    Reflux.connect(ShowGOTOsStore, 'showGOTOs'),
    Reflux.connect(ThemeStore, 'theme')
  ],

  componentDidMount: function() {
    TransposeActions.reset();
    FontSizeActions.reset();
    SongActions.load(this.props.params.artist, this.props.params.name);
    document.title = this.props.params.name;
  },

  render: function() {
    return (
      <Box transparent={false}>
        <h1 style={{textAlign: 'center'}}>
          {this.state.song.artist} - {this.state.song.name}
        </h1>

        <Toolbox />

        <Youtube url={this.state.song.youtube} />

        <Key songKey={this.state.song.key} transpose={this.state.transpose} />

        <Compiler
          source={this.state.song.source}
          transpose={this.state.transpose}
          theme={this.state.theme}
          fontSize={this.state.fontSize}
          showChords={this.state.showChords}
          showComments={this.state.showComments}
          showGOTOs={this.state.showGOTOs}
        />
      </Box>
    );
  }
});

module.exports = Song;
