import React from 'react';
import { 
    Alert,
    Fade,
 } from "react-bootstrap";
 

function StatusAlert({ isUpdated, isError }){
    return (
        <React.Fragment>
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
        </React.Fragment>
    );
}

export default StatusAlert;