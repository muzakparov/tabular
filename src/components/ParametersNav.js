import React, { Component } from 'react';

// import { PARAMSTABLE_HEADERS } from '../constants';

import TableNavigation from './TableNavigation';
import ParamsTable from './ParametersNav/ParamsTable';
import StatusAlert from './StatusAlert';


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
                <StatusAlert isUpdated={isUpdated} isError={isError} />
                
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
