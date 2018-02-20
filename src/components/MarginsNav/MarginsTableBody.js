import React, { Component } from 'react';
import {
    Table,
} from 'react-bootstrap';

import MarginsTbodyRow from './MarginsTbodyRow'


class MarginsTableBody extends Component {

    render() {
        const { marginsRowArr } = this.props 
        const { onMarginsChange } = this.props

        const tbodyRowsList = marginsRowArr.map((marginsRow,i)=>(
            <MarginsTbodyRow
                    key={marginsRow.event_id}
                    marginsRow={marginsRow}
                    onMarginsChange={onMarginsChange}
            />
        ))

        return (
            <tbody>
                    {tbodyRowsList}
            </tbody>
        );
    }
}

export default MarginsTableBody;
