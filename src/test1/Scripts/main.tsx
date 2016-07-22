/// <reference path="./typings/globals/react/index.d.ts" />
/// <reference path="./typings/globals/react-dom/index.d.ts" />


import * as React from 'react';
import * as ReactDOM from 'react-dom';
declare var Router;


var Counter = React.createClass({
    setNum: function (event) {
        this.setState({
            //todo:check for valid number
            num: event.target.value,      
        });
    },
    add: function () {
        if (this.state.toal === undefined || this.state.toal === null) {
            this.state.toal = 0;
        }
        this.setState({
            sign: "+",
            total: Number(this.state.total) + Number(this.state.num),
            num: ""
        });
    },
    subtract: function () {
        this.setState({
            sign: "-",
            total: Number(this.state.total) - Number(this.state.num),
            num: ""
        });
    },
    multiply: function () {
        this.setState({
            sign: "*",        
            total: Number(this.state.total) * Number(this.state.num),
            num: ""
        });
    },
    divide: function () {
        this.setState({
            //todo: make sure it is not zero
            sign: "/",
            total: Number(this.state.total) / Number(this.state.num),
            num: ""
        });
    },
    getInitialState: function () {
        return {
            num: 0,
            total: 0,
            sign: "?"

        }
    },
    clear: function () {
        this.setState({
            num: 0,
            total: 0,
            sign: "?"
        });
    },
    render: function () {
        return (
            <div class="my-component">
                <h1>Calculator</h1>
                Total {this.state.total}<br />
                Sign {this.state.sign}<br />
                <input type="text" name="Num" value={this.state.num} onChange={this.setNum}></input><br />
                <button type="button" onClick={this.add}>+</button>
                <button type="button" onClick={this.subtract}>-</button>
                <button type="button" onClick={this.multiply}>*</button>
                <button type="button" onClick={this.divide}>/</button>
                <button type="button" onClick={this.clear}>Clear</button>
            </div>
        );
    }
});

ReactDOM.render(<Counter/>, document.getElementById('content'));

