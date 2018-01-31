import React, { Component } from 'react';

class LeagueListDropdown extends Component {

    render() {
        const options = this.props.leagues.map(
            (league, i) => (
                <option key={i} value={league}>{league}</option>
            )
        );

        return (
            <select className="form-control">
                {options}
            </select>
        );
    }
}

export default LeagueListDropdown;
