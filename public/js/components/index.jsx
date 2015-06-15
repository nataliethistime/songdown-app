'use strict';

var React = require('react');
var Reflux = require('reflux');

var ArtistsList = require('js/components/artistsList');

var Index = React.createClass({
  render: function() {
    return (
      <div style={{
        textAlign: 'center',
      }}>
        <h1>Songdown Collection</h1>

        <ArtistsList />

      </div>
    );
  }
});

module.exports = Index;
