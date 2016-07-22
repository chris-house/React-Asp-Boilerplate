import * as React from "react";

export interface HelloProps {  firstname: string;  lastname: string; }

export class Hello extends React.Component<HelloProps, {}> {
    render() {
        return <h1>Hello from {this.props.firstname} and {this.props.lastname}!</h1>;
    }
}