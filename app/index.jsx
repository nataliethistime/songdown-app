'use strict';

var React = require('react');

require('babel/polyfill');

var ReactRouter = require('react-router');
var RouteHandler = ReactRouter.RouteHandler;
var Route = ReactRouter.Route;

var Edit = require('./components/edit');
var Header = require('./components/header');
var Index = require('./components/index');
var Song = require('./components/song');

var App = React.createClass({
  render: function() {
    return (
      <div style={{
        fontFamily: '"Segoe UI", "Arial"',
        fontSize: '16px',
        backgroundColor: 'rgb(129, 131, 133)',
        width: '100%',
        height: '100%',
        position: 'fixed',
        top: 0,
        left: 0,
        overflow: 'auto'
      }}>

        <Header />
        <RouteHandler />

      </div>
    );
  }
});

var routes = (
  <Route handler={App}>
    <Route name="index" path="/" handler={Index} />

    <Route name="editor" path="/edit" handler={Edit}>
      <Route name="editSong" path="/edit/:artist/:name" handler={Edit} />
    </Route>

    <Route name="song" path="/song/:artist/:name" handler={Song} />
  </Route>
);

window.onload = function() {
  ReactRouter.run(routes, ReactRouter.HistoryLocation, function(Root) {
    React.render(<Root />, document.body);
  });
};
