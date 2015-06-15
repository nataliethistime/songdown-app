'use strict';

var React = require('react');

var ReactRouter = require('react-router');
var Route = ReactRouter.Route;

var Main = require('js/components/main');
var Index = require('js/components/index');


var routes = (

  <Route handler={Main}>
    <Route path="/" handler={Index} />
  </Route>

);

window.onload = function() {
  ReactRouter.run(routes, ReactRouter.HashLocation, function(Root) {
    React.render(<Root />, document.body);
  })
};
