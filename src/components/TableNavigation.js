import React, { Component } from 'react';
import {
    Nav,
    NavItem,
} from "react-bootstrap";

import { LinkContainer } from "react-router-bootstrap";


class TableNavigation extends Component {

    render() {

        return (
            <Nav bsStyle="tabs" activeKey={this.props.activeKey}>
                <LinkContainer exact to="/" >
                    <NavItem eventKey="1">
                        LaunchpadTable
                    </NavItem>
                </LinkContainer>
                <LinkContainer exact to="/parameters" >
                    <NavItem eventKey="2">
                        Parameters
                        </NavItem>
                </LinkContainer>
                <LinkContainer exact to="/margins" >
                    <NavItem eventKey="3">
                        {/* <NavLink
                                to="/margins"
                                className="nav-link"
                                activeClassName="activeX"
                            > */}
                        Margins
                            {/* </NavLink> */}
                    </NavItem>
                </LinkContainer>
                <LinkContainer exact to="/prices" >
                    <NavItem eventKey="4">
                        Prices
                    </NavItem>
                </LinkContainer>
            </Nav>
        );
    }
}

export default TableNavigation;
