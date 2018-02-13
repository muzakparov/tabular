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

import { PARAMSTABLE_HEADERS } from '../constants';

import TableNavigation from './TableNavigation';
import KickoffDateLabel from './TabList/LaunchpadTable/KickoffDateLabel';
import LaunchpadTableHead from './TabList/LaunchpadTable/LaunchpadTableHead';


class ParametersNav extends Component {

    render() {

        return (
            <div className="container-fluid">
                <TableNavigation activeKey="2" />                
                <ParamsTable paramsRowArr={this.props.paramsRowArr} />
            </div>
        );
    }
}

class ParamsTable extends Component{
    render(){
        const { paramsRowArr }=this.props

        console.log("paramsRowArr",paramsRowArr)

        const tbodyRowList = paramsRowArr.map(param =>{
            console.log("paramX", param)

            return (
                <React.Fragment key={param.event_id}>
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
                        <td className="text-center"><FormControl componentClass="input" type="number" step="0.1" defaultValue={param.goals_away_bump.toFixed(1)}  className="text-center" /></td>
                        <td className="text-center"><FormControl componentClass="input" type="number" step="0.1" defaultValue={param.corners_home_bump.toFixed(1)}  className="text-center" /></td>
                        <td className="text-center"><FormControl componentClass="input" type="number" step="0.1" defaultValue={param.corners_away_bump.toFixed(1)} className="text-center"  /></td>
                        <td className="text-center"><FormControl componentClass="input" type="number" step="0.1" defaultValue={param.cards_home_bump.toFixed(1)} className="text-center"  /></td>
                        <td className="text-center"><FormControl componentClass="input" type="number" step="0.1" defaultValue={param.cards_away_bump.toFixed(1)} className="text-center"  /></td>                         
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
        })

        return (
            <Table responsive bordered condensed hover className="params-table">
                <thead>
                    <tr>
                        <th className="text-center"></th>
                        <th className="text-center"></th>
                        <th className="text-center"></th>
                        <th className="text-center"></th>
                        <th className="text-center"></th>                        
                        <th colSpan="2" className="text-center">Goals</th>
                        <th colSpan="2" className="text-center">Corners</th>
                        <th colSpan="2" className="text-center">Cards</th>
                        <th></th> 
                    </tr>
                    <tr>
                        <th className="text-center">Kickoff</th>
                        <th className="text-center">League</th>
                        <th className="text-center">Id</th>
                        <th className="text-center">Name</th>
                        <th className="text-center">Parameters</th>
                        <th className="text-center">home</th>
                        <th className="text-center">away</th>
                        <th className="text-center">home</th>
                        <th className="text-center">away</th>
                        <th className="text-center">home</th>
                        <th className="text-center">away</th>
                        <th></th>                        
                    </tr>
                </thead>
                <tbody>
                   {tbodyRowList}
                </tbody>                     
            </Table>
        );
    }
}

export default ParametersNav;
