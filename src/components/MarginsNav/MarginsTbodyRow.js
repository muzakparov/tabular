import React, { Component } from 'react';
import {
    Button,
} from 'react-bootstrap';

import { URL } from "../../constants"

import KickoffDateLabel from "../TabList/LaunchpadTable/KickoffDateLabel"

class MarginsTbodyRow extends Component {
    constructor() {
        super()

        this.state = {
            isChanged: false,
            changedMarginsObj: {},
        }

        this.handleMarginsChange = this.handleMarginsChange.bind(this)
        this.handleUpdateMarginsClick = this.handleUpdateMarginsClick.bind(this)
    }

    handleMarginsChange(e, propName, event_id) {
        const changedMarginsObj = { ...this.state.changedMarginsObj }
        const value = e.target.value

        console.log("changedMarginsObj", e.target.value, '"' + propName + '"', event_id);

        changedMarginsObj["event_id"] = event_id
        changedMarginsObj[propName] =  value

        this.setState({
            isChanged: true,
            changedMarginsObj: changedMarginsObj,
        })

        this.props.onMarginsChange(event_id,propName, value)
    }

    handleUpdateMarginsClick() {
        if (this.state.isChanged) {
            console.log("changedMarginsObj", this.state.changedMarginsObj)

            fetch(URL + "/margins/write", {
                body: JSON.stringify(this.state.changedMarginsObj),
                headers: {
                    'content-type': 'application/json'
                },
                method: 'POST',
                mode: 'cors',
            })
                .then(() => {

                    this.setState({
                        isChanged: false,
                        changedMarginsObj: {},
                    })

                    return new Promise((resolve) => resolve("resolved"));
                })
                .catch(err => {
                    console.error("/margins/write", err);

                })
        }
    }

    render() {
        const { isChanged } = this.state
        const { marginsRow } = this.props

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
                <td key={marginsRow["event_id"] + "_" + propName}>
                    <input
                        type="number"
                        className="text-center"
                        step='0.01'
                        defaultValue={marginsRow[propName]}
                        onChange={(e) => { this.handleMarginsChange(e, propName, marginsRow["event_id"]) }}
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
                <td style={{ whiteSpace: "nowrap" }}>
                    <span>{marginsRow.fixture}</span>
                </td>
                <td>
                    <Button
                        bsStyle={isChanged ? "warning" : "primary"}
                        onClick={this.handleUpdateMarginsClick}
                    >Update</Button>
                </td>
                {tdChangeableList}
            </tr>
        );
    }
}

export default MarginsTbodyRow;
