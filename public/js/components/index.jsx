'use strict';

var React = require('react');

var SongActions = require('js/actions/song');

var Box = require('js/components/box');
var Collection = require('js/components/collection');

var Index = React.createClass({

  componentDidMount: function() {
    // Ensure we clear out any song data now that we're on the index page.
    SongActions.clear();
  },

  render: function() {
    return (
      <div>

        <Box>
          <Collection />
        </Box>

      </div>
    );
  }
});

module.exports = Index;
