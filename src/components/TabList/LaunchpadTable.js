import React, { Component } from 'react';
import { 
    Table,
 } from "react-bootstrap";

import LaunchpadTableHead from "./LaunchpadTable/LaunchpadTableHead";
import LaunchpadTableRowsList from "./LaunchpadTable/LaunchpadTableRowsList";
import TableNavigation from '../TableNavigation';

import { LAUCHPADTABLE_HEADERS } from '../../constants'


class LaunchpadTable extends Component {    
    render() {
        const { launchpadRowArr } = this.props        

        return (
            <div>
                <TableNavigation activeKey="1" />

                <Table responsive bordered condensed hover>
                    <thead>
                        <LaunchpadTableHead headers={LAUCHPADTABLE_HEADERS}/>
                    </thead>
                    <tbody>
                        <LaunchpadTableRowsList 
                            launchpadRowArr={launchpadRowArr}
                            onToggleBtnStatus={this.props.onToggleBtnStatus}
                        />
                    </tbody>
                </Table>
            </div>
        );
    }
}

export default LaunchpadTable;
