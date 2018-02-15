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
        const { isUpdated } = this.props
        const { onIsUpdated } = this.props    

        return (
            <Table responsive bordered condensed hover className="params-table">
                <ParamsTableHead className="table-head-fixed"/>
                <ParamsTableBody 
                    paramsRowArr={paramsRowArr} 
                    onLambdaChange={this.props.onLambdaChange}
                    isUpdated={isUpdated}
                    onIsUpdated={onIsUpdated}                 
                />
            </Table>
        );
    }
}

export default ParamsTable;
