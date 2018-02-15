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

import { PARAMSTABLE_HEADERS } from '../constants';

import TableNavigation from './TableNavigation';
import ParamsTable from './ParametersNav/ParamsTable';

import LaunchpadTableHead from './TabList/LaunchpadTable/LaunchpadTableHead';


class ParametersNav extends Component {
    render() {
        return (
            <div className="container-fluid">
                <TableNavigation activeKey="2" />                
                <ParamsTable paramsRowArr={this.props.paramsRowArr} onLambdaChange={this.props.onLambdaChange}/>
            </div>
        );
    }
}

export default ParametersNav;
