import React from 'react';

import ParamsTableRow from './ParamsTableRow';


function ParamsTableBody(props) {
    const { paramsRowArr } = props
    const { isUpdated } = props
    const { onIsUpdated } = props
    const { updateParamBtnStatusArr } = this.props

    const tbodyRowsList = paramsRowArr.map(param => {
        return (
            <ParamsTableRow
                key={param.event_id}
                param={param}
                onLambdaChange={props.onLambdaChange}
                isUpdated={isUpdated}
                onIsUpdated={onIsUpdated}
                updateParamBtnStatusArr={updateParamBtnStatusArr}
                onUpdateParamBtnStatusArr={this.props.onUpdateParamBtnStatusArr}
            />
        );
    })

    return (
        <tbody>
            {tbodyRowsList}
        </tbody>
    );
}

export default ParamsTableBody;