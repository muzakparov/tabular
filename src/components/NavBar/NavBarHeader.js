import React, { Component } from 'react';

import { Navbar } from 'react-bootstrap';


class NavBarHeader extends Component {

    render() {

        return (
            <Navbar.Header>
                <Navbar.Brand>
                    <a href="#brand">Launchpad</a>
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
        );
    }
}

export default NavBarHeader;
