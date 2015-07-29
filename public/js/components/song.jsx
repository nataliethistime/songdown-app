'use strict';

var React = require('react');
var Reflux = require('reflux');

var SongActions = require('js/actions/song');

var SongStore = require('js/stores/song');

var Compiler = require('songdown-compiler');

var Box = require('js/components/box');

var Song = React.createClass({

  mixins: [
    Reflux.connect(SongStore, 'source')
  ],

  componentDidMount: function() {
    SongActions.load(this.props.params.artist, this.props.params.name);
  },

  render: function() {
    return (
      <Box transparent={false}>
        <Compiler source={this.state.source} theme='default' />
      </Box>
    );
  }
});

module.exports = Song;
