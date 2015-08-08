'use strict';

var React = require('react');
var Reflux = require('reflux');

var TransposeActions = require('./../actions/transpose');
var SongActions = require('./../actions/song');

var TransposeStore = require('./../stores/transpose');
var SongStore = require('./../stores/song');

var Compiler = require('songdown-compiler');

var Box = require('./box');
var Toolbox = require('./toolbox');

var Song = React.createClass({

  mixins: [
    Reflux.connect(SongStore, 'song'),
    Reflux.connect(TransposeStore, 'transpose')
  ],

  componentDidMount: function() {
    TransposeActions.reset();
    SongActions.load(this.props.params.artist, this.props.params.name);
  },

  render: function() {
    return (
      <Box transparent={false}>
        <h1 style={{textAlign: 'center'}}>
          {this.state.song.artist} - {this.state.song.name}
        </h1>

        <Toolbox />

        <Compiler
          source={this.state.song.source}
          transpose={this.state.transpose}
          theme="default"
        />
      </Box>
    );
  }
});

module.exports = Song;
