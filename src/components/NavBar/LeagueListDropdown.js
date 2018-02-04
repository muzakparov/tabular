import React, { Component } from 'react';

class LeagueListDropdown extends Component {    
  
    handleLeagueSelectChange(e){
        const selectedLeague = e.target.value;

        this.props.onLeagueSelectChange(selectedLeague);
    }

    render() {
        const options = this.props.leagues.map(
            

            (league, i) => {
               
                return <option key={i} value={league}>{league}</option>
            }
        );

        return (
            <select className="form-control" onChange={(e)=>{this.handleLeagueSelectChange(e)}} defaultValue="ENG.1">
                {options}
            </select>
        );
    }
}

export default LeagueListDropdown;
