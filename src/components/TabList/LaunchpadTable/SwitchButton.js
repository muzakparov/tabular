import React, { Component } from 'react';


class SwitchButtonList extends Component {
    toggleBtnStatus(event_id, btnStatus, switchMarket){
        console.log('btnStatus BEFORE', btnStatus)
        btnStatus=!btnStatus
        console.log('btnStatus AFTER', btnStatus)

        this.props.onToggleBtnStatus(event_id, btnStatus, switchMarket);
    }

    render() {
        const { event_id } = this.props
        const { switchTypeObj } = this.props        
        
        const btnStatus = Object.values(switchTypeObj)[0]
        const switchMarket = Object.keys(switchTypeObj)[0]

        return (
            <button 
                className={"btn btn-"+(btnStatus?"danger":"primary")} 
                onClick={()=>this.toggleBtnStatus(event_id, btnStatus,switchMarket)}
            >
                {btnStatus?"ON":"OFF"}
            </button>
        );
    }
}

export default SwitchButtonList;
