(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};

  Handlebars.partials = Handlebars.templates;
templates['search'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div id=\"search-bar\">\n  <input type=\"text\" id=\"searchInput\" placeholder=\"Search for a Song...\">\n</div>\n<div id=\"search-results\">\n  <li id=\"results\"></li>\n</div>\n";
},"useData":true});
templates['searchItem'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<a class=\"song-link\" href=\"/song/"
    + alias3(((helper = (helper = helpers.artist || (depth0 != null ? depth0.artist : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"artist","hash":{},"data":data}) : helper)))
    + "/"
    + alias3(((helper = (helper = helpers.track || (depth0 != null ? depth0.track : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"track","hash":{},"data":data}) : helper)))
    + "\" target=\"_blank\">"
    + alias3(((helper = (helper = helpers.fullName || (depth0 != null ? depth0.fullName : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"fullName","hash":{},"data":data}) : helper)))
    + "</a>\n";
},"useData":true});
})();