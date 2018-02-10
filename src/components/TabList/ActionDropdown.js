import React, { Component } from 'react';


class ActionDropdown extends Component {
    render() {
        return (
            <div className="btn-group">
                <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown">
                Action
                <span className="caret"></span>
                </button>
                <ul className="dropdown-menu">
                    <li>
                        <a>{this.props.placeholder}</a>
                    </li>
                </ul>
            </div>
        );
    }
}

export default ActionDropdown;
