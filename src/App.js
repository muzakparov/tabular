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

    this.handleLeagueSelectChange = this.handleLeagueSelectChange.bind(this)
    this.setMatchRowState = this.setMatchRowState.bind(this)
    this.handleBtnToggle = this.handleBtnToggle.bind(this)
  }

  componentDidMount() {
    console.log('COMPONENT DID MOUNT\n\n');
    const { selectedLeague } = this.state

    const endpoint = '/get_status?league='
    const queryStrSelected = 'ENG.1';

    this.interval = setInterval(()=>{
      this.fetchJSONData(endpoint, queryStrSelected)
      .then(this.setMatchRowState)
    }, 1000)
  }

  componentWillUnmount(){
    clearInterval(this.interval);
  }

  setMatchRowState(matchRowArr) {
    this.setState({
      matchRowArr,
    });
    console.log('matchRowArr STATE', this.state.matchRowArr);
  }

  handleLeagueSelectChange(selectedLeague) {
    const queryStr = "league=" + selectedLeague

    console.log('handleLeagueSelectChange', selectedLeague);
    this.fetchJSONData("/get_status?", queryStr)
      .then(this.setMatchRowState);

  }

  fetchJSONData(endpoint, queryStr) {
    const query = endpoint + queryStr;

    return fetch(URL + query).then((response) => {
      return response.json();
    }).
      then((data) => {
        return new Promise((resolve, reject) => { resolve(data) });
      });
  }

  postData(endpoint, queryStr) {
    const query = endpoint + queryStr;

    fetch(URL + query).catch(err => {
      console.error(err)
    })
  }

  handleBtnToggle(event_id, btnStatus, switchMarket) {
    console.log(`handleBtnToggle ${event_id} ${btnStatus} ${switchMarket} /n`);

    const matchRowArr = this.state.matchRowArr.slice().map(matchObj => {
      if (matchObj.event_id === event_id && switchMarket !== "master") {

        matchObj[switchMarket] = btnStatus;

        let countBtnOff = 0;

        if(btnStatus){
          matchObj.master=btnStatus
        }else{          
          Object.keys(matchObj).forEach(matchObjKeys=>{
            if(matchObj[matchObjKeys]===true && matchObjKeys!=="master"){             
              countBtnOff++
            }
          })

          if(!countBtnOff){
            matchObj.master=btnStatus
          }
        }
      }else if(matchObj.event_id === event_id){
        if(!btnStatus){
          matchObj.master=btnStatus

          Object.keys(matchObj).forEach(matchObjKeys=>{
            if(matchObj[matchObjKeys]===true){             
              matchObj[matchObjKeys]=btnStatus
            }
          })
        }
      }

      return matchObj;
    })

    this.setMatchRowState(matchRowArr)

    const statusBinary = btnStatus ? "1" : "0"
    const endpoint = "/write?"
    const queryStr = "event_id=" + event_id + "&switch=" + switchMarket + "&status=" + statusBinary

    if(switchMarket==="master" && btnStatus)
      return;
    this.postData(endpoint, queryStr)
  }


  render() {
    const { leagues } = this.state
    const { email } = this.state
    const { matchRowArr } = this.state

    console.log('APP.js')
    console.table(matchRowArr);

    return (
      <div>
        <NavBar
          leagues={LEAGUESARR}
          email={EMAIL}
          onLeagueSelectChange={this.handleLeagueSelectChange}
        />
        <TabList
          matchRowArr={matchRowArr}
          onToggleBtnStatus={this.handleBtnToggle}
        />
      </div>
    );
  }
}

export default App;
