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

  getInitialState: function() {
    return {
      source: ''
    };
  },

  componentDidMount: function() {
    SongActions.load(this.props.params.artist, this.props.params.name);
  },

  render: function() {
    var thisIsDangerous = {
      __html: (new Compiler(this.state.source)).toHtml()
    };

    var style = {
      whiteSpace: 'pre',
      fontFamily: 'monospace'
    };

    return (
      <Box transparent={false}>
        <div dangerouslySetInnerHTML={thisIsDangerous} style={style}></div>
      </Box>
    );
  }
});

module.exports = Song;
