import React, { Component } from 'react';


class MasterButton extends Component {
    toggleMasterButton(){
        this.props.onMasterBtnClick(this.props.masterBtnId);
    }

    render() {
        // console.log("xx",this.props.isActive);
        const masterBtnEl = (this.props.isActive?
            <button id={this.props.masterBtnId}
                className="btn btn-danger"
                onClick={e => this.toggleMasterButton()}
            >On</button> :
            <button id={this.props.masterBtnId}
                className="btn btn-primary"
                onClick={e => this.toggleMasterButton()}
            >Off</button>
        );
    

        return (
            <span>
                {masterBtnEl}
            </span>            
        );
    }
}

export default MasterButton;
