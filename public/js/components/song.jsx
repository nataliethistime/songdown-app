'use strict';

var React = require('react');
var Reflux = require('reflux');

var SongActions = require('js/actions/song');

var SongStore = require('js/stores/song');

var Compiler = require('songdown-compiler');

var Box = require('js/components/box');

var Song = React.createClass({

  mixins: [
    Reflux.connect(SongStore, 'song')
  ],

  componentDidMount: function() {
    SongActions.load(this.props.params.artist, this.props.params.name);
  },

  shouldComponentUpdate: function(nextProps, nextState) {
    return this.state.song.source !== nextState.song.source;
  },

  render: function() {
    return (
      <Box transparent={false}>
        <h1 style={{textAlign: 'center'}}>{this.state.song.artist} - {this.state.song.name}</h1>
        <Compiler source={this.state.song.source} theme="default" />
      </Box>
    );
  }
});

module.exports = Song;
