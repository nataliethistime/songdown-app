'use strict';

var React = require('react');
var Radium = require('radium');

var TransposeActions = require('./../actions/transpose');

var styles = require('./../styles');

var Toolbox = React.createClass({
  render: function() {
    return (
      <div style={styles.toolbox}>
        Transpose <button type="button" onClick={TransposeActions.transposeUp}>+</button>
        <button type="button" onClick={TransposeActions.transposeDown}>-</button>
      </div>
    );
  }
});

module.exports = Radium(Toolbox);
