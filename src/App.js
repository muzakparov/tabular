import React, { Component } from 'react';

import NavBar from './components/NavBar';
import TabList from './components/TabList';

import { URL, LEAGUESARR, EMAIL } from './constants';//constants

class App extends Component {


  constructor() {
    super()

    this.state = {
      selectedLeague: '',
      matchRowArr: [],
    }

    this.handleLeagueSelectChange=this.handleLeagueSelectChange.bind(this)
    this.setMatchRowState=this.setMatchRowState.bind(this)
  }

  componentDidMount() {
    console.log('COMPONENT DID MOUNT\n\n');
    const { selectedLeague }= this.state
    
    const endpoint = '/get_status?league='
    const queryStrSelected = 'ENG.1';

    this.fetchData(endpoint,queryStrSelected)
    .then(this.setMatchRowState);

    
  }

  setMatchRowState(matchRowArr){
    this.setState({
      matchRowArr,
    });
    console.log('matchRowArr STATE',this.state.matchRowArr);
  }

  handleLeagueSelectChange(selectedLeague){
    console.log('handleLeagueSelectChange',selectedLeague);
    this.fetchData( "/get_status?league=", selectedLeague)
    .then(this.setMatchRowState);
    
  }

  fetchData(endpoint, queryStr) {
    const query =endpoint+queryStr;

    return fetch(URL + query).then((response) => {
      return response.json();
    }).
    then((data) => {
      return new Promise((resolve,reject)=>{resolve(data)});
    });
  }

  



  render() {
    console.log('RENDER matchRowArr', this.state.matchRowArr);

    const { leagues } = this.state
    const { email } = this.state
    const { matchRowArr } = this.state

    return (
      <div>
        <NavBar
          leagues={LEAGUESARR}
          email={EMAIL}
          onLeagueSelectChange = {this.handleLeagueSelectChange}
        />
        <TabList 
          matchRowArr={matchRowArr}
        />
      </div>
    );
  }
}

export default App;
