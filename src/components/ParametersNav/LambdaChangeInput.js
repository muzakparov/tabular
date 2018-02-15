import React, { Component } from 'react';

import {
    FormControl,
} from "react-bootstrap";


class LambdaChangeInput extends Component{
   
    handleLambdaChange = (e) =>{
        console.log("VALUE", e.target.value,Object.keys(this.props.lambdaChange)[0], this.props.event_id)

        this.props.onLambdaChange(this.props.event_id,Object.keys(this.props.lambdaChange)[0], e.target.value)       
    }

    render(){
        const { step } = this.props
        const { lambdaChange } = this.props
    
        return (
            <FormControl                 
                componentClass="input"
                className="text-center" 
                type="number" 
                step={step}
                defaultValue={Object.values(lambdaChange)[0]}
                onChange={this.handleLambdaChange}
            />
        );
    }
}


export default LambdaChangeInput;
