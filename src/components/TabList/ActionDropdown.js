import React, { Component } from 'react';


class ActionDropdown extends Component {
    render() {
        return (
            <div class="btn-group">
                <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">
                Action
                <span class="caret"></span>
                </button>
                <ul class="dropdown-menu">
                    <li>
                        <a>Show Team</a>
                    </li>
                </ul>
            </div>
        );
    }
}

export default ActionDropdown;
