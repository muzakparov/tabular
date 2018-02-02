import React, { Component } from 'react';


class ButtonRow extends Component {
    handleClick(e){
        this.props.onButtonClick(e.target.id, this.props.masterBtnId);
    }

    render() {
        let buttonsList = this.props.buttonsList;

        // console.log('buttonsList',buttonsList);

        buttonsList= buttonsList.map((button,i)=>{
            return (
                <td className="text-center" key={i} >
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

export default ButtonRow;
