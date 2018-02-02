import React, { Component } from 'react';

import MasterButton from './TableRow/MasterButton';

class TableRow extends Component {
    render() {
        // console.log("BEFORE MASTERBUTTON", this.props.isActive);

        return (
            <tr className="text-center">
                <td className="">
                    <span className="label label-warning">Today 19:45</span>
                </td>
                <td className="">ENG.1</td>
                <td className="">001</td>
                <td className="">Chelsea vs AFC Bournemouth</td>
                <td>
                    <MasterButton
                        isActive={this.props.isActive}
                        masterBtnId={this.props.masterBtnId} 
                        onMasterBtnClick={(masterBtnId)=>this.props.onMasterBtnClick(masterBtnId)}
                    />
                </td>
            </tr>
        );
    }
}

export default TableRow;
