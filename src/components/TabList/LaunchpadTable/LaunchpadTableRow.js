import React, { Component } from 'react';

import {  MONTH_NAMES } from '../../../constants'

import SwitchButton from './SwitchButton';
import KickoffDateLabel from './KickoffDateLabel';

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

        const switchButtonsRow = [
            { master: master },
            { goals_grid: goals_grid },
            {match_corners:match_corners},
            {match_cards:match_cards},
            {home_player_cards:home_player_cards},
            {away_player_cards:away_player_cards},
            {home_player_goals:home_player_goals},
            {away_player_goals:away_player_goals},
        ]

        const switchButtonsList = switchButtonsRow.map((switchTypeObj, index) => {
            return (
                <td key={index}>
                    <SwitchButton
                        key={event_id + Object.keys(switchTypeObj)[0]}
                        event_id={event_id}
                        switchTypeObj={switchTypeObj}
                        onToggleBtnStatus={this.props.onToggleBtnStatus}
                    />
                </td>
            );
        });                     

        // console.log("KICKOFF", correctDateFormat)

        return (
            <tr className="text-center">
                <td>
                    <KickoffDateLabel kickoff={kickoff} />                    
                </td>
                <td>{league}</td>
                <td>{event_id}</td>
                <td>{fixture}</td>
                {switchButtonsList}
            </tr>
        );
    }
}

export default TableRow;
