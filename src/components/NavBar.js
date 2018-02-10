import React, { Component } from 'react';
import { 
    Navbar,
    Nav,
    NavItem,
    NavDropdown,
    MenuItem,
} from 'react-bootstrap';


import NavBarHeader from './NavBar/NavBarHeader';
import LeagueListDropdown from './NavBar/LeagueListDropdown';

class NavBar extends Component {
    
    render() {
        const { leagues } = this.props
        const { email } = this.props

        return (
               <Navbar inverse collapseOnSelect>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="#brand">Launchpad</a>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav pullRight>
                            <NavItem eventKey={1} href="#">
                                League
                            </NavItem>
                            <NavItem eventKey={0}>
                                <LeagueListDropdown 
                                        leagues={leagues}
                                        onLeagueSelectChange = {(selectedLeague)=>this.props.onLeagueSelectChange(selectedLeague)} 
                                    />
                            </NavItem>

                            <NavDropdown eventKey={2} title="Dropdown" id="basic-nav-dropdown">
                                <MenuItem eventKey={3.1}>Action</MenuItem>
                                <MenuItem eventKey={3.2}>Another action</MenuItem>
                                <MenuItem eventKey={3.3}>Something else here</MenuItem>
                                <MenuItem divider />
                                <MenuItem eventKey={3.3}>Separated link</MenuItem>
                            </NavDropdown>
                            <NavItem eventKey={3} href="#">
                                {email}
                            </NavItem>
                            <NavItem eventKey={4} href="#">
                                Logout  
                            </NavItem>                            
                        </Nav>                        
                    </Navbar.Collapse>
                </Navbar>
       );
    }
}

export default NavBar;
