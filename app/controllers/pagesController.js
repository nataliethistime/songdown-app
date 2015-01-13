var _ = require('lodash');
var locomotive = require('locomotive');

var pagesController = new locomotive.Controller();

var functions = {
  index: function() {
    this.render();
  },
  song: function() {
    var fname = this.param('fname');
    console.log(fname);
    this.render();
  }
};

module.exports = _.merge(pagesController, functions);
