import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    NavLink,
} from "react-router-dom";
import { Switch } from "react-router";
import { 
    Nav,
    NavItem,
 } from "react-bootstrap";

import PlaceholderComponent from './PlaceholderComponent';


class OtherComponent extends Component {

    render() {

        return (
            <div>
                <Nav bsStyle="tabs" activeKey="2">
                    <NavItem eventKey="1">
                            <NavLink
                                to="/"
                                className="nav-link"                            
                                activeClassName="activeX"
                            >
                                LaunchpadTable
                            </NavLink>
                    </NavItem>
                    <NavItem eventKey="2" title="Item">
                            <NavLink
                                to="/other"
                                className="nav-link"
                                activeClassName="activeX"
                            >
                                OtherComponent
                            </NavLink>
                    </NavItem>
                </Nav>

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
