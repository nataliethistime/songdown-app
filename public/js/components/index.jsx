'use strict';

var React = require('react');

var Box = require('js/components/box');
var Collection = require('js/components/collection');
var ForkRibbon = require('js/components/forkRibbon');
var Header = require('js/components/header');

var Index = React.createClass({
  render: function() {
    return (
      <div>

        <ForkRibbon />
        <Header />
        <Box>
          <Collection />
        </Box>

      </div>
    );
  }
});

module.exports = Index;
