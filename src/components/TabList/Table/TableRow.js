import React, { Component } from 'react';

import MasterButton from './TableRow/MasterButton';

class TableRow extends Component {
    render() {
        const { 
            kickoff,
            league,
            event_id,
            fixture,
            master,
            goals_grid,
            match_corners,
            match_cards,
            home_player_cards,
            away_player_cards,
            home_player_goals,
            away_player_goals,            
        } = this.props

        // console.log("BEFORE MASTERBUTTON", this.props.isActive);
        console.log('TABLE ROW\n\n', kickoff+' AND '+event_id);

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
