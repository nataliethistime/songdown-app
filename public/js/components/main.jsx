'use strict';

var React = require('react');

var ReactRouter = require('react-router');
var RouteHandler = ReactRouter.RouteHandler;

var Material = require('material-ui');
var ThemeManager = new Material.Styles.ThemeManager();
var Paper = Material.Paper;

var injectTapEventPlugin = require('react-tap-event-plugin');

// Needed for onTouchTap
// Can go away when react 1.0 release
// Check this repo:
// https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

var Main = React.createClass({

  childContextTypes: {
    muiTheme: React.PropTypes.object
  },

  getChildContext: function() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  },

  render: function() {
    return (
      <div>
        <Paper zDepth={3} style={{width: '80vw', margin: '0 auto'}}>
          <RouteHandler />
        </Paper>
      </div>
    );
  }
});

module.exports = Main;
