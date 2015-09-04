'use strict';

var React = require('react');
var Radium = require('radium');

require('babel/polyfill');

var ReactRouter = require('react-router');
var RouteHandler = ReactRouter.RouteHandler;
var Route = ReactRouter.Route;
var DefaultRoute = ReactRouter.DefaultRoute;
var NotFoundRoute = ReactRouter.NotFoundRoute;

var Edit = require('./components/edit');
var Header = require('./components/header');
var Index = require('./components/index');
var Song = require('./components/song');

var styles = require('./styles');

var App = Radium(React.createClass({
  render: function() {
    return (
      <div style={styles.app}>

        <Header />
        <RouteHandler />

      </div>
    );
  }
}));

var NotFound = React.createClass({
  render: function() {
    return (
      <div style={{textAlign: 'center'}}>
        <h1>404 Not Found</h1>
        <img src="http://www.martinprint.com.au/blog/wp-content/uploads/2012/04/003.jpg"></img>
      </div>
    );
  }
});

var routes = (
  <Route handler={App}>
    <DefaultRoute handler={Index} />
    <NotFoundRoute handler={NotFound} />

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
