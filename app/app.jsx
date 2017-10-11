var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

//load foundation
$(document).foundation();

//CSS
require('style!css!sass!ApplicationStyles');

ReactDOM.render(
    <p>React Boilerpalte v3</p>,
    document.getElementById('app')
);