import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    NavLink,
} from "react-router-dom";
import { Switch } from "react-router";
import { 
    Nav,
    NavItem,
    NavDropdown,
    MenuItem,
 } from "react-bootstrap";



class MarginsNav extends Component {

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

               <div>MarginsNav</div>
                <p className="text-center middle">OtherComponent</p>
            </div>
        );
    }
}

export default MarginsNav;
