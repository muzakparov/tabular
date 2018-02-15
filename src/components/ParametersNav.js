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
    Alert,
    Fade,
    Popover,
    Modal,
    OverlayTrigger,
 } from "react-bootstrap";

import { PARAMSTABLE_HEADERS } from '../constants';

import TableNavigation from './TableNavigation';
import ParamsTable from './ParametersNav/ParamsTable';

import LaunchpadTableHead from './TabList/LaunchpadTable/LaunchpadTableHead';


class ParametersNav extends Component {
    constructor(){
        super()

        this.state = {
            isUpdated:false,
            isError:false,
        }

        this.handleIsUpdated=this.handleIsUpdated.bind(this)
    }   

    handleIsUpdated(isFail){
        console.log("handleIsUpdated", isFail)
        if(!isFail){
            this.setState({
                isUpdated:true,
            })            
        }else{
            this.setState({
                isError:true,
            })            
        }
        
        setTimeout(() => {
            this.setState({
                isUpdated:false,
                isError:false,
            })
        }, 400);
    }

    render() {
        const { isUpdated } = this.state
        const { isError } = this.state
        
        return (
            <div className="container-fluid">
                {
                    isUpdated && 
                    <Fade in={isUpdated} timeout={5000}>
                            <Alert bsStyle="success">
                                Updated Successfully
                            </Alert>
                    </Fade>
                }
                {
                    isError &&
                    <Fade in={isError} timeout={5000}>
                            <Alert bsStyle="danger">
                                Update Error
                            </Alert>
                    </Fade>
                }
                <TableNavigation activeKey="2" />                
                <ParamsTable 
                    paramsRowArr={this.props.paramsRowArr} 
                    onLambdaChange={this.props.onLambdaChange}
                    isUpdated={isUpdated}
                    onIsUpdated={this.handleIsUpdated}
                />
            </div>
        );
    }
}

export default ParametersNav;
