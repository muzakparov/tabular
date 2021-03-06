import React, { Component } from 'react';
import { FormControl } from 'react-bootstrap';

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
            <FormControl 
                    componentClass="select" 
                    onChange={(e)=>{this.handleLeagueSelectChange(e)}} 
                    defaultValue="ENG.1"
                    style={{transform:"translateY(-10px)"}}
            >
                {options}
            </FormControl>
        );
    }
}

export default LeagueListDropdown;
