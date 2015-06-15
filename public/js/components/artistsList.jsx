'use strict';

var React = require('react');
var Reflux = require('reflux');

var ArtistsStore = require('js/stores/artists');

var ArtistsList = React.createClass({
  mixins: [
    Reflux.connect(ArtistsStore, 'artists')
  ],
  render: function() {
    return (
      <div>
      </div>
    );
  }
});

module.exports = ArtistsList;
