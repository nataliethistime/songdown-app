'use strict';

var React = require('react');

var ReactRouter = require('react-router');
var RouteHandler = ReactRouter.RouteHandler;
var Route = ReactRouter.Route;

var Index = require('js/components/index');

var Song = require('js/components/song');


var App = React.createClass({
  render: function() {
    return (
      <div style={{
        fontFamily: '"Segoe UI", "Arial"',
        fontSize: '16px',
        backgroundColor: 'rgb(109, 196, 77)',
        width: '100%',
        height: '100%',
        position: 'fixed',
        top: 0,
        left: 0,
        overflow: 'auto'
      }}>

        <RouteHandler />

      </div>
    );
  }
});

var routes = (
  <Route handler={App}>
    <Route name="index" path="/" handler={Index} />
    <Route name="song" path="/song/:artist/:name" handler={Song} />
  </Route>
);

window.onload = function() {
  ReactRouter.run(routes, ReactRouter.HistoryLocation, function(Root) {
    React.render(<Root />, document.body);
  });
};
