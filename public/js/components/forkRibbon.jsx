'use strict';

var React = require('react');

var GithubForkRibbon = require('react-github-fork-ribbon');

var ForkRibbon = React.createClass({
  render: function() {
    return (
      <GithubForkRibbon
        position="right"
        color="orange"
        href="https://github.com/1vasari/songdown-app"
        target="_blank"
      >
        Check it on Github!
      </GithubForkRibbon>
    );
  }
});

module.exports = ForkRibbon;
