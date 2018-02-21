import React, { Component } from 'react';


import LaunchpadTableRow from "./LaunchpadTableRow";


class LaunchpadTableRowsList extends Component {    
    render() {
        const { launchpadRowArr } = this.props

        const tableRowsList = launchpadRowArr.map(matchRow => {
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
