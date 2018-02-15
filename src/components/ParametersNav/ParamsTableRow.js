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

import { URL } from "../../constants"

import KickoffDateLabel from '../TabList/LaunchpadTable/KickoffDateLabel';
import LambdaChangeInput from './LambdaChangeInput';


class ParamsTableRow extends Component {
    constructor() {
        super()

        this.handleUpdateClick = this.handleUpdateClick.bind(this)
    }

    handleUpdateClick() {
        let isFail = false;

        fetch(URL + "/params/write", {
            body: JSON.stringify(this.props.param),
            headers: {
                'content-type': 'application/json'
            },
            method: 'POST',
            mode: 'cors',
        })
        .then(() => {
            this.props.onIsUpdated(isFail);
            return new Promise((resolve)=>resolve("resolved"));
        })
        .catch(err => {
            console.error("/params/write", err);
            isFail = true

            this.props.onIsUpdated(isFail);
        })
    }

    render() {
        const { param } = this.props

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
                    <td rowSpan="5" className="text-center">
                        <button className="btn btn-warning" onClick={this.handleUpdateClick}>UPDATE</button>
                    </td>
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
                    <td className="text-center">
                        <LambdaChangeInput onLambdaChange={this.props.onLambdaChange} step="0.01" lambdaChange={{ "goals_home_bump": param.goals_home_bump }} event_id={param.event_id} />
                    </td>
                    <td className="text-center">
                        <LambdaChangeInput onLambdaChange={this.props.onLambdaChange} step="0.01" lambdaChange={{ "goals_away_bump": param.goals_away_bump }} event_id={param.event_id} />
                    </td>
                    <td className="text-center">
                        <LambdaChangeInput onLambdaChange={this.props.onLambdaChange} step="0.05" lambdaChange={{ "corners_home_bump": param.corners_home_bump }} event_id={param.event_id} />
                    </td>
                    <td className="text-center">
                        <LambdaChangeInput onLambdaChange={this.props.onLambdaChange} step="0.05" lambdaChange={{ "corners_away_bump": param.corners_away_bump }} event_id={param.event_id} />
                    </td>
                    <td className="text-center">
                        <LambdaChangeInput onLambdaChange={this.props.onLambdaChange} step="0.05" lambdaChange={{ "cards_home_bump": param.cards_home_bump }} event_id={param.event_id} />
                    </td>
                    <td className="text-center">
                        <LambdaChangeInput onLambdaChange={this.props.onLambdaChange} step="0.05" lambdaChange={{ "cards_away_bump": param.cards_away_bump }} event_id={param.event_id} />
                    </td>
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
}


export default ParamsTableRow;
