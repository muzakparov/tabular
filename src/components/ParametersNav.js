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

import TableNavigation from './TableNavigation';


class ParametersNav extends Component {

    render() {

        return (
            <div>
                <TableNavigation activeKey="2" />

                <p className="text-center middle">ParametersNav</p>
            </div>
        );
    }
}

export default ParametersNav;
