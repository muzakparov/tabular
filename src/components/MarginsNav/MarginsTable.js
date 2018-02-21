import React, { Component } from 'react';
import {
    Table,
} from 'react-bootstrap';

import MarginsTableHead from './MarginsTableHead';
import MarginsTableBody from './MarginsTableBody';

class MarginsNav extends Component {

    render() {
        const { marginsRowArr } = this.props
        const { onMarginsChange } = this.props

        return (
            <Table bordered >
                <MarginsTableHead />
                <MarginsTableBody
                    marginsRowArr={marginsRowArr}
                    onMarginsChange={onMarginsChange}
                />
            </Table>
        );
    }
}

export default MarginsNav;
