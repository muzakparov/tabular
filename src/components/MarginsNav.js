import React, { Component } from 'react';
import {
    Table,
} from 'react-bootstrap';

import TableNavigation from './TableNavigation';
import MarginsTableHead from './MarginsNav/MarginsTableHead';
import MarginsTableBody from './MarginsNav/MarginsTableBody';

class MarginsNav extends Component {

    render() {
        const { marginsRowArr } = this.props 
        const { onMarginsChange } = this.props

        return (        
            <div>
                <TableNavigation activeKey="3" />
                <div style={{overflowX:"scroll", height:"490px", overflowY:"scroll"}}>
                    <Table bordered >
                        <MarginsTableHead />
                        <MarginsTableBody 
                            marginsRowArr={marginsRowArr}
                            onMarginsChange={onMarginsChange}
                        />
                    </Table>
                </div>
            </div>
        );
    }
}

export default MarginsNav;
