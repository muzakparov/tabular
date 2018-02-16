import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

import { URL } from "../../constants"

import KickoffDateLabel from '../TabList/LaunchpadTable/KickoffDateLabel';
import LambdaChangeInput from './LambdaChangeInput';


class ParamsTableRow extends Component {
    constructor() {
        super()

        this.state = {
            isChanged: false,
        }

        this.handleUpdateClick = this.handleUpdateClick.bind(this)
        this.handleLambdaInputChange = this.handleLambdaInputChange.bind(this)
    }

    handleUpdateClick() {
        let isFail = false;

        if(this.state.isChanged){
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
    
                    this.setState({
                        isChanged: false,
                    })
    
                    return new Promise((resolve) => resolve("resolved"));
                })
                .catch(err => {
                    console.error("/params/write", err);
                    isFail = true
    
                    this.props.onIsUpdated(isFail);
                })
        }

        
    }

    handleLambdaInputChange() {

        this.setState({
            isChanged: true,
        })
    }

    render() {
        const { param } = this.props
        const { isChanged } = this.state

        return (

            <React.Fragment>
                <tr>
                    <td rowSpan="5" className="text-center"><KickoffDateLabel kickoff={param.kickoff} /></td>
                    <td rowSpan="5" className="text-center">{param.league}</td>
                    <td rowSpan="5" className="text-center">{param.event_id}</td>
                    <td rowSpan="5" className="text-center">{param.fixture}</td>
                    <td className="text-right">lambda</td>
                    <td className="text-center">{param.goals_home_io.toFixed(2)}</td>
                    <td className="text-center">{param.goals_away_io.toFixed(2)}</td>
                    <td className="text-center">{param.corners_home_io.toFixed(2)}</td>
                    <td className="text-center">{param.corners_away_io.toFixed(2)}</td>
                    <td className="text-center">{param.cards_home_io.toFixed(2)}</td>
                    <td className="text-center">{param.cards_away_io.toFixed(2)}</td>
                    <td rowSpan="5" className="text-center">
                        <Button bsStyle={isChanged ? "warning" : "primary"} onClick={this.handleUpdateClick}>UPDATE</Button>
                    </td>
                </tr>
                <tr>
                    <td className="text-right">market lambda</td>
                    <td className="text-center">{param.goals_home_market.toFixed(2)}</td>
                    <td className="text-center">{param.goals_away_market.toFixed(2)}</td>
                    <td className="text-center">{param.corners_home_market.toFixed(2)}</td>
                    <td className="text-center">{param.corners_away_market.toFixed(2)}</td>
                    <td className="text-center">{param.cards_home_market.toFixed(2)}</td>
                    <td className="text-center">{param.cards_away_market.toFixed(2)}</td>
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
                        <LambdaChangeInput
                            onLambdaInputChange={this.handleLambdaInputChange}
                            onLambdaChange={this.props.onLambdaChange}
                            step="0.01" lambdaChange={{ "goals_home_bump": param.goals_home_bump }}
                            event_id={param.event_id}
                        />
                    </td>
                    <td className="text-center">
                        <LambdaChangeInput
                            onLambdaInputChange={this.handleLambdaInputChange}
                            onLambdaChange={this.props.onLambdaChange}
                            step="0.01" lambdaChange={{ "goals_away_bump": param.goals_away_bump }}
                            event_id={param.event_id}
                        />
                    </td>
                    <td className="text-center">
                        <LambdaChangeInput
                            onLambdaInputChange={this.handleLambdaInputChange}
                            onLambdaChange={this.props.onLambdaChange}
                            step="0.05" lambdaChange={{ "corners_home_bump": param.corners_home_bump }}
                            event_id={param.event_id}
                        />
                    </td>
                    <td className="text-center">
                        <LambdaChangeInput
                            onLambdaInputChange={this.handleLambdaInputChange}
                            onLambdaChange={this.props.onLambdaChange}
                            step="0.05" lambdaChange={{ "corners_away_bump": param.corners_away_bump }}
                            event_id={param.event_id}
                        />
                    </td>
                    <td className="text-center">
                        <LambdaChangeInput
                            onLambdaInputChange={this.handleLambdaInputChange}
                            onLambdaChange={this.props.onLambdaChange}
                            step="0.05" lambdaChange={{ "cards_home_bump": param.cards_home_bump }}
                            event_id={param.event_id}
                        />
                    </td>
                    <td className="text-center">
                        <LambdaChangeInput
                            onLambdaInputChange={this.handleLambdaInputChange}
                            onLambdaChange={this.props.onLambdaChange}
                            step="0.05" lambdaChange={{ "cards_away_bump": param.cards_away_bump }}
                            event_id={param.event_id}
                        />
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
