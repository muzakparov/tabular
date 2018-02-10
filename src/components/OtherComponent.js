import React, { Component } from 'react';
import { NavLink } from "react-router-dom"

import {
    BrowserRouter as Router,
    Route,
    Redirect,
} from "react-router-dom";
import { Switch } from "react-router";

import PlaceholderComponent from './PlaceholderComponent';


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

                <Router>
                    <Switch>
                        <Route exact 
                            path="/other" 
                            component={PlaceholderComponent} 
                        />
                        {/* <Route path="/other" component={OtherComponent} /> */}
                       
                        {/* <Redirect from="/*" to="/404" /> */}
                    </Switch>
                </Router>
                <p className="text-center middle">OtherComponent</p>
            </div>
        );
    }
}

export default OtherComponent;
