import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import { 
    Nav,
    NavItem,
    NavDropdown,
    MenuItem,
    Table,
 } from "react-bootstrap";

import LaunchpadTableRow from "./LaunchpadTableRow";



class LaunchpadTableRowsList extends Component {    
    render() {
        const { matchRowArr } = this.props

        const tableRowsList = matchRowArr.map(matchRow => {
            return (
                <LaunchpadTableRow
                    key={matchRow.event_id}
                    {...matchRow}
                    onToggleBtnStatus={this.props.onToggleBtnStatus}
                />
            );
        });

        return (
             <React.Fragment>
                {tableRowsList}
            </React.Fragment>
        );
    }
}

export default LaunchpadTableRowsList;
