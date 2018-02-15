import React, { Component } from 'react';

import { 
    Alert,
    Fade,
 } from "react-bootstrap";

// import { PARAMSTABLE_HEADERS } from '../constants';

import TableNavigation from './TableNavigation';
import ParamsTable from './ParametersNav/ParamsTable';


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
