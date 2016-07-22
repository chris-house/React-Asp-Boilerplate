/// <reference path="./typings/globals/react/index.d.ts" />
/// <reference path="./typings/globals/react-dom/index.d.ts" />
"use strict";
var React = require('react');
var ReactDOM = require('react-dom');
var Counter = React.createClass({
    incrementCount: function () {
        this.setState({
            count: this.state.count + 1
        });
    },
    getInitialState: function () {
        return {
            count: 0
        };
    },
    render: function () {
        return (React.createElement("div", {class: "my-component"}, React.createElement("h1", null, "Count: ", this.state.count), React.createElement("button", {type: "button", onClick: this.incrementCount}, "Increment")));
    }
});
ReactDOM.render(React.createElement(Counter, null), document.getElementById('content'));
