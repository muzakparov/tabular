import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import { 
    Nav,
    NavItem,
    NavDropdown,
    MenuItem,
 } from "react-bootstrap";

 import { LinkContainer } from "react-router-bootstrap";


class TableNavigation extends Component {   

    render() {    

        return (
                <Nav bsStyle="tabs" activeKey={this.props.activeKey}>
                    <NavItem eventKey="1">
                            <NavLink
                                to="/"
                                className="nav-link"                            
                                activeClassName="activeX"
                            >
                                LaunchpadTable
                            </NavLink>
                    </NavItem>
                    <NavItem eventKey="2">
                            <NavLink
                                to="/parameters"
                                className="nav-link"
                                activeClassName="activeX"
                            >
                                Parameters
                            </NavLink>
                    </NavItem>
                    <NavItem eventKey="3">
                            <NavLink
                                to="/margins"
                                className="nav-link"
                                activeClassName="activeX"
                            >
                                Margins
                            </NavLink>
                    </NavItem>
                    <NavItem eventKey="4">
                            <NavLink
                                to="/prices"
                                className="nav-link"
                                activeClassName="activeX"
                            >
                                Prices
                            </NavLink>
                    </NavItem>
                </Nav>               
        );
    }
}

export default TableNavigation;
