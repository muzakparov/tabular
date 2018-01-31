import React, { Component } from 'react';


class ActionDropdown extends Component {
    render() {
        return (
            <tr className="text-center">
                <td className="">
                    <span className="label label-warning">Today 19:45</span>
                </td>
                <td className="">ENG.1</td>
                <td className="">001</td>
                <td className="">Chelsea vs AFC Bournemouth</td>
                <td className="">
                    <button type="button" class="btn btn-primary">On</button>
                </td>
            </tr>
        );
    }
}

export default ActionDropdown;
