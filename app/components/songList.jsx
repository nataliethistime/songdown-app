'use strict';

var React = require('react');
var Radium = require('radium');
var Reflux = require('reflux');
var _ = require('lodash');

var SongListItem = require('./songListItem');

var styles = require('./../styles');

var SongList = React.createClass({
  propTypes: {
    songs: React.PropTypes.object.isRequired
  },

  getInitialProps: function() {
    return {
      songs: {}
    };
  },

  render: function() {
    var arr = [];

    _.each(this.props.songs, function(song, name) {
      arr.push(
        <li key={name}>
          <SongListItem song={song} />
        </li>
      );
    });

    return (
      <ul style={styles.songList}>
        {arr}
      </ul>
    )
  }
});

module.exports = Radium(SongList);
