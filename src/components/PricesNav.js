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


class PricesNav extends Component {

    render() {

        return (
            <div>             
                <TableNavigation activeKey="4" /> 
               <div>PricesNav</div>                
            </div>
        );
    }
}

export default PricesNav;
