import React, { Component } from 'react';
import {
    FormControl,
} from 'react-bootstrap';

import KickoffDateLabel from "../TabList/LaunchpadTable/KickoffDateLabel"

class MarginsTbodyRow extends Component {

    render() {
        const { marginsRow } = this.props
        const { onMarginsChange } = this.props

        const tdsList = [           
            "away_acard_p_ft",
            "away_ags_p_ft",
            "away_ared_p_ft",
            "away_bh",
            "away_bp_ft",
            "away_corners_ft",
            "away_eh",
            "away_fcard_p_ft",
            "away_fgs_p_ft",
            "away_ft",
            "away_threegs_p_ft",
            "both_bp_ft",
            "both_corners_ft",
            "btts_bh",
            "btts_eh",
            "btts_ft",
            "draw_bh",
            "draw_eh",
            "draw_ft",
            "home_acard_p_ft",
            "home_ags_p_ft",
            "home_ared_p_ft",
            "home_bh",
            "home_bp_ft",
            "home_corners_ft",
            "home_eh",
            "home_fcard_p_ft",
            "home_fgs_p_ft",
            "home_ft",
            "home_threegs_p_ft",
            "lower_goals_bound",
            "match_away_fcard_p_ft",
            "match_away_fgs_p_ft",
            "match_home_fcard_p_ft",
            "match_home_fgs_p_ft",
            "total_bp_ft",
            "total_corners_ft",
            "total_goals_bound",
            "upper_goals_bound",            
        ]

        const tdChangeableList = tdsList.map(propName => {            
            return (
                <td>
                    <input
                        type="number"
                        className="text-center"
                        step='0.01'
                        defaultValue={marginsRow[propName].toFixed(2)}
                        onChange={this.handleMarginsChange}
                    />
                </td>
            );
        })

        return (
            <tr>
                <td>
                    <KickoffDateLabel kickoff={marginsRow.kickoff} />
                </td>
                <td>
                    {marginsRow.league}
                </td>
                <td>
                    {marginsRow.event_id}
                </td>
                <td style={{whiteSpace:"nowrap"}}>
                    {marginsRow.fixture}
                </td>
                {tdChangeableList}
            </tr>
        );
    }
}

export default MarginsTbodyRow;
