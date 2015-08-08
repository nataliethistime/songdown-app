'use strict';

var React = require('react');
var Radium = require('radium');
var Reflux = require('reflux');
var _ = require('lodash');

var HeaderLink = require('./headerLink');

var styles = require('./../styles');

var SongStore = require('./../stores/song');

var Header = React.createClass({
  mixins: [
    Reflux.connect(SongStore, 'song')
  ],

  render: function() {

    var editHref = '/edit';
    if (this.state.song.artist && this.state.song.name) {
      editHref = '/edit/' + this.state.song.artist + '/' + this.state.song.name;
    }

    return (
      <div style={styles.header}>
        <HeaderLink href="/">Home</HeaderLink>
        <HeaderLink href={editHref}>Edit</HeaderLink>
      </div>
    );
  }
});

module.exports = Radium(Header);
