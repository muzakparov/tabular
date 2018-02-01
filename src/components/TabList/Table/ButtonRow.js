import React, { Component } from 'react';


class ActionDropdown extends Component {
    handleClick(e){
        this.props.onButtonClick(e.target.id);
    }

    render() {
        let buttonsList = this.props.buttonsList;

        buttonsList= buttonsList.map((button)=>{
            return (
            <td className="text-center">
                {button.isActive?
                                <button id={button.id} 
                                        className="btn btn-danger" 
                                        onClick={e=>this.handleClick(e)}
                                >On</button>:
                                <button id={button.id} 
                                        className="btn btn-primary"
                                        onClick={e=>this.handleClick(e)}
                                >Off</button>}
            </td>);
        });

        return (
            <tr>
                {buttonsList}
            </tr>
        );
    }
}

export default ActionDropdown;
