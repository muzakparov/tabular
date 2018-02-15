import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    NavLink,
} from "react-router-dom";
import { Switch } from "react-router";
import {
    Table,
    FormControl,
} from "react-bootstrap";

import ParamsTableHead from './ParamsTableHead';
import ParamsTableBody from './ParamsTableBody';


class ParamsTable extends Component {
    render() {
        const { paramsRowArr } = this.props

        return (
            <Table responsive bordered condensed hover className="params-table">
                <ParamsTableHead />
                <ParamsTableBody paramsRowArr={paramsRowArr} onLambdaChange={this.props.onLambdaChange}/>
            </Table>
        );
    }
}

export default ParamsTable;
