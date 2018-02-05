import React, { Component } from 'react';
import { NavLink } from "react-router-dom"


class OtherComponent extends Component {

    render() {

        return (
            <div>
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <NavLink
                            to="/"
                            className="nav-link"
                            activeClassName="activeX"
                        >
                            LaunchpadTable
                    </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            to="/other"
                            className="nav-link"
                            activeClassName="activeX"
                        >
                            OtherComponent
                    </NavLink>
                    </li>
                </ul>


                <p className="text-center middle">OtherComponent</p>
            </div>
        );
    }
}

export default OtherComponent;
