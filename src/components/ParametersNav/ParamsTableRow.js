import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    NavLink,
} from "react-router-dom";
import { Switch } from "react-router";
import {
    Table,
    FormControl,
} from "react-bootstrap";

import KickoffDateLabel from '../TabList/LaunchpadTable/KickoffDateLabel';


function ParamsTableRow(props) {
    const { param } = props

    return (
        <React.Fragment>
            <tr>
                <td rowSpan="5" className="text-center"><KickoffDateLabel kickoff={param.kickoff} /></td>
                <td rowSpan="5" className="text-center">{param.league}</td>
                <td rowSpan="5" className="text-center">{param.event_id}</td>
                <td rowSpan="5" className="text-center">{param.fixture}</td>
                <td className="text-right">lambda</td>
                <td className="text-center">{param.goals_home_io.toFixed(1)}</td>
                <td className="text-center">{param.goals_away_io.toFixed(1)}</td>
                <td className="text-center">{param.corners_home_io.toFixed(1)}</td>
                <td className="text-center">{param.corners_away_io.toFixed(1)}</td>
                <td className="text-center">{param.cards_home_io.toFixed(1)}</td>
                <td className="text-center">{param.cards_away_io.toFixed(1)}</td>
                <td rowSpan="5" className="text-center"><button className="btn btn-warning">UPDATE</button></td>
            </tr>
            <tr>
                <td className="text-right">market lambda</td>
                <td className="text-center">{param.goals_home_market.toFixed(1)}</td>
                <td className="text-center">{param.goals_away_market.toFixed(1)}</td>
                <td className="text-center">{param.corners_home_market.toFixed(1)}</td>
                <td className="text-center">{param.corners_away_market.toFixed(1)}</td>
                <td className="text-center">{param.cards_home_market.toFixed(1)}</td>
                <td className="text-center">{param.cards_away_market.toFixed(1)}</td>
            </tr>
            <tr>
                <td className="text-right">suggested lambda change</td>
                <td className="text-center">{"X"}</td>
                <td className="text-center">{"X"}</td>
                <td className="text-center">{"X"}</td>
                <td className="text-center">{"X"}</td>
                <td className="text-center">{"X"}</td>
                <td className="text-center">{"X"}</td>
            </tr>
            <tr>
                <td className="text-right">lambda change</td>
                <td className="text-center"><FormControl componentClass="input" type="number" step="0.1" defaultValue={param.goals_home_bump.toFixed(1)} className="text-center" /></td>
                <td className="text-center"><FormControl componentClass="input" type="number" step="0.1" defaultValue={param.goals_away_bump.toFixed(1)} className="text-center" /></td>
                <td className="text-center"><FormControl componentClass="input" type="number" step="0.1" defaultValue={param.corners_home_bump.toFixed(1)} className="text-center" /></td>
                <td className="text-center"><FormControl componentClass="input" type="number" step="0.1" defaultValue={param.corners_away_bump.toFixed(1)} className="text-center" /></td>
                <td className="text-center"><FormControl componentClass="input" type="number" step="0.1" defaultValue={param.cards_home_bump.toFixed(1)} className="text-center" /></td>
                <td className="text-center"><FormControl componentClass="input" type="number" step="0.1" defaultValue={param.cards_away_bump.toFixed(1)} className="text-center" /></td>
            </tr>
            <tr>
                <td className="text-right">market status</td>
                <td className="text-center">{"X"}</td>
                <td className="text-center">{"X"}</td>
                <td className="text-center">{"X"}</td>
                <td className="text-center">{"X"}</td>
                <td className="text-center">{"X"}</td>
                <td className="text-center">{"X"}</td>
            </tr>
        </React.Fragment>
    );
}


export default ParamsTableRow;
