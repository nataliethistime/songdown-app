'use strict';

var React = require('react');
var Reflux = require('reflux');

var FontSizeActions = require('./../actions/fontSize');
var TransposeActions = require('./../actions/transpose');
var SongActions = require('./../actions/song');

var FontSizeStore = require('./../stores/fontSize');
var SongStore = require('./../stores/song');
var TransposeStore = require('./../stores/transpose');

var Compiler = require('songdown-compiler');

var Box = require('./box');
var Key = require('./key');
var Toolbox = require('./toolbox');
var Youtube = require('./youtube');

var Song = React.createClass({

  mixins: [
    Reflux.connect(SongStore, 'song'),
    Reflux.connect(TransposeStore, 'transpose'),
    Reflux.connect(FontSizeStore, 'fontSize')
  ],

  componentDidMount: function() {
    TransposeActions.reset();
    FontSizeActions.reset();
    SongActions.load(this.props.params.artist, this.props.params.name);
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
          theme="default"
          fontSize={this.state.fontSize}
        />
      </Box>
    );
  }
});

module.exports = Song;
