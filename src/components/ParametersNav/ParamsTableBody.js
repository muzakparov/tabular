import React from 'react';

import ParamsTableRow from './ParamsTableRow';


function ParamsTableBody(props) {
    const { paramsRowArr } = props

    const tbodyRowsList = paramsRowArr.map(param => {
        return (
            <ParamsTableRow key={param.event_id} param={param} onLambdaChange={props.onLambdaChange} />
        );
    })

    return (
        <tbody>
            {tbodyRowsList}
        </tbody>
    );
}

export default ParamsTableBody;