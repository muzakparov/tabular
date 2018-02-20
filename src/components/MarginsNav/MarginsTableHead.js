import React, { Component } from 'react';
import {
    Table,
} from 'react-bootstrap';



class MarginsTableBody extends Component {

    render() {
        const theadList = [
            "Kickoff",
            "League",
            "Id",
            "Name",
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

        const trHeadList = theadList.map((th,i)=>(
            <th key={i} className="text-center">{th}</th>
        ))

        return (
            <thead>
                <tr>
                   {trHeadList}
                </tr>
            </thead>
        );
    }
}

export default MarginsTableBody;
