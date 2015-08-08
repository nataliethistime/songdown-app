'use strict';

var React = require('react');
var Reflux = require('reflux');

var SongActions = require('./../actions/song');

var SongStore = require('./../stores/song');

var Compiler = require('songdown-compiler');

var Box = require('./box');

var Song = React.createClass({

  mixins: [
    Reflux.connect(SongStore, 'song')
  ],

  getInitialState: function() {
    return {
      transpose: 0
    };
  },

  transposeUp: function() {
    this.setState({
      transpose: this.state.transpose + 1
    });
  },

  transposeDown: function() {
    this.setState({
      transpose: this.state.transpose - 1
    });
  },

  componentDidMount: function() {
    SongActions.load(this.props.params.artist, this.props.params.name);
  },

  render: function() {
    return (
      <Box transparent={false}>
        <h1 style={{textAlign: 'center'}}>
          {this.state.song.artist} - {this.state.song.name}
        </h1>

        <div style={{
          top: 0,
          right: 0,
          float: 'right',

          padding: 5,
          border: '1px solid #000000',
          borderRadius: 6
        }}>
          Transpose: <button type="button" onClick={this.transposeUp}>+</button>
          <button type="button" onClick={this.transposeDown}>-</button>
        </div>

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
