import React, { Component } from 'react';

import {
    Table,
} from "react-bootstrap";

import ParamsTableHead from './ParamsTableHead';
import ParamsTableBody from './ParamsTableBody';


class ParamsTable extends Component {
    render() {
        const { paramsRowArr } = this.props 
        const { isUpdated } = this.props
        const { onIsUpdated } = this.props
        const { updateParamBtnStatusArr } = this.props   

        return (
            <Table responsive bordered condensed hover className="params-table">
                <ParamsTableHead className="table-head-fixed"/>
                <ParamsTableBody 
                    paramsRowArr={paramsRowArr} 
                    onLambdaChange={this.props.onLambdaChange}
                    isUpdated={isUpdated}
                    onIsUpdated={onIsUpdated}
                    updateParamBtnStatusArr={updateParamBtnStatusArr}
                    onUpdateParamBtnStatusArr={this.props.onUpdateParamBtnStatusArr}                
                />
            </Table>
        );
    }
}

export default ParamsTable;
