import React, { Component } from 'react';

import NavBarHeader from './NavBar/NavBarHeader';
import LeagueListDropdown from './NavBar/LeagueListDropdown';

class NavBar extends Component {
    
    render() {
        const { leagues } = this.props
        const { email } = this.props

        return (
            <div>
                <nav className="navbar navbar-inverse navbar-fixed-top">
                    <div className="container-fluid">
                        <NavBarHeader />

                        <div id="navbar" className="navbar-collapse collapse">

                            <ul className="nav navbar-nav navbar-right">
                                <li>
                                    <a>League</a>
                                </li>
                                <li style={{ marginTop: "7px" }}>
                                    <LeagueListDropdown 
                                        leagues={leagues}
                                        onLeagueSelectChange = {(selectedLeague)=>this.props.onLeagueSelectChange(selectedLeague)} 
                                    />
                                </li>
                                <li>
                                    <a href="#">{email}</a>
                                </li>
                                <li>
                                    <a style={{ paddingLeft: "0px", paddingRight: "0px" }}>|</a>
                                </li>
                                <li>
                                    <a href="#">Logout</a>
                                </li>
                            </ul>
                            {/* <div id="message" className="alert alert-warning text-center" style={{ position: "fixed", paddingTop: "5px", paddingBottom: "5px", marginTop: "13px", marginLeft: "80px" }}>Loading ..</div> */}
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default NavBar;
