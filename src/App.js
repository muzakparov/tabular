import React, { Component } from 'react';

import './index.css';

import NavBar from './components/NavBar';
import TabList from './components/TabList';

import { URL, LEAGUESARR, EMAIL } from './constants';//constants

class App extends Component {

  constructor() {
    super()

    this.state = {
      selectedLeague: 'ENG.1',
      matchRowArr: [],
      paramsRowArr: [],
    }

    this.handleLeagueSelectChange = this.handleLeagueSelectChange.bind(this)
    this.setMatchRowState = this.setMatchRowState.bind(this)
    this.handleBtnToggle = this.handleBtnToggle.bind(this)
    this.handleLambdaChange = this.handleLambdaChange.bind(this)
  }

  componentDidMount() {
    console.log('COMPONENT DID MOUNT\n\n');
    const { selectedLeague } = this.state

    let endpoint = '/launchpad/get_status?league='
    const queryStrSelected = selectedLeague;

    //for launchapad
    this.fetchJSONData(endpoint, queryStrSelected)
      .then(this.setMatchRowState)

    //for params
    endpoint = '/params/get_status?league='
    this.fetchJSONData(endpoint, queryStrSelected)
      .then(data => {
        this.setState({
          paramsRowArr: data,
        })
      })
    // this.interval = setInterval(()=>{
    //   this.fetchJSONData(endpoint, queryStrSelected)
    //   .then(this.setMatchRowState)
    // }, 5000)
  }

  componentWillUnmount() {
    // clearInterval(this.interval);
  }

  setMatchRowState(matchRowArr) {
    this.setState({
      matchRowArr,
    });
    console.log('matchRowArr STATE', this.state.matchRowArr);
  }

  handleLeagueSelectChange(selectedLeague) {
    let endpoint = '/launchpad/get_status?';
    const queryStr = "league=" + selectedLeague;

    console.log('handleLeagueSelectChange', selectedLeague);
    this.fetchJSONData(endpoint, queryStr)
      .then(data => {
        this.setState({
          selectedLeague,
          matchRowArr: data,
        })
      })

    this.fetchJSONData(endpoint, queryStr)
    .then(data=>{
      this.setState({
        paramsRowArr: data,
      })
    })
  }

  handleLambdaChange(event_id, propName, value) {
    let paramsRowArr = this.state.paramsRowArr.slice()

    paramsRowArr.map((param) => {
      if (param.event_id === event_id) {
        param[propName] = value
      }

      return param;
    })

    this.setState({
      paramsRowArr,
    })
  }

  fetchJSONData(endpoint, queryStr) {
    const query = endpoint + queryStr;

    return fetch(URL + query).then((response) => {
      return response.json();
    })
      .then((data) => {
        return new Promise((resolve, reject) => { resolve(data) });
      })
      .catch(err => {
        if (err) {
          console.log(err);
        }
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

        if (btnStatus) {
          matchObj.master = btnStatus
        } else {
          Object.keys(matchObj).forEach(matchObjKeys => {
            if (matchObj[matchObjKeys] === true && matchObjKeys !== "master") {
              countBtnOff++
            }
          })

          if (!countBtnOff) {
            matchObj.master = btnStatus
          }
        }
      } else if (matchObj.event_id === event_id) {
        if (!btnStatus) {
          matchObj.master = btnStatus

          Object.keys(matchObj).forEach(matchObjKeys => {
            if (matchObj[matchObjKeys] === true) {
              matchObj[matchObjKeys] = btnStatus
            }
          })
        }
      }

      return matchObj;
    })

    this.setMatchRowState(matchRowArr)

    const statusBinary = btnStatus ? "1" : "0"
    const endpoint = "/launchpad/write?"
    const queryStr = "event_id=" + event_id + "&switch=" + switchMarket + "&status=" + statusBinary

    if (switchMarket === "master" && btnStatus)
      return;
    this.postData(endpoint, queryStr)
  }


  render() {
    const { matchRowArr } = this.state
    const { paramsRowArr } = this.state

    console.log('---------------------APP-----------------------------')
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
          paramsRowArr={paramsRowArr}
          onToggleBtnStatus={this.handleBtnToggle}
          onLambdaChange={this.handleLambdaChange}
        />
      </div>
    );
  }
}

export default App;
