import React, { Component } from 'react';

import './index.css';

import NavBar from './components/NavBar';
import TabList from './components/TabList';

import { URL, LEAGUESARR, EMAIL } from './constants';

class App extends Component {

  constructor() {
    super()

    this.state = {
      selectedLeague: 'ENG.1',
      launchpadRowArr: [],
      paramsRowArr: [],
      updateParamBtnStatusArr: [],//to persist state across routes
      marginsRowArr: [],
      updateMarginBtnStatusArr: [],
    }

    this.handleLeagueSelectChange = this.handleLeagueSelectChange.bind(this)
    this.setLaunchpadRowState = this.setLaunchpadRowState.bind(this)
    this.handleBtnToggle = this.handleBtnToggle.bind(this)
    this.handleLambdaChange = this.handleLambdaChange.bind(this)
    this.handleMarginsChange = this.handleMarginsChange.bind(this)
  }

  componentDidMount() {
    console.log('COMPONENT DID MOUNT\n\n');
    const { selectedLeague } = this.state

    const endpointLaunchpad = '/launchpad/get_status?league='
    const endpointParams = '/params/get_status?league='
    const endpointMargins = '/margins/get_status?league='

    const queryStrSelected = selectedLeague;

    //for launchapad
    this.fetchJSONData(endpointLaunchpad, queryStrSelected)
      .then(this.setLaunchpadRowState)

    //for params    
    this.fetchJSONData(endpointParams, queryStrSelected)
      .then(data => {
        this.setState({
          paramsRowArr: data,
        })
      })

    //for margins
    this.fetchJSONData(endpointMargins, queryStrSelected)
      .then(marginsRowArr => {
        this.setState({
          marginsRowArr:marginsRowArr,
        })

        this.setUpdateParamBtnStatusArr(marginsRowArr)
      })


    this.interval = setInterval(() => {
      this.fetchJSONData(endpointLaunchpad, this.state.selectedLeague)
        .then(this.setLaunchpadRowState);

      this.fetchJSONData(endpointParams, this.state.selectedLeague)
        .then(paramsRowArr => {
          this.setState({
            paramsRowArr,
          })
        })

      this.fetchJSONData(endpointMargins, queryStrSelected)
        .then(data => {
          this.setState({
            marginsRowArr: data,  
          })
        })
    }, 500000)
  }

  setUpdateParamBtnStatusArr(marginsRowArr){
    const updateParamBtnStatusArr = marginsRowArr.map(marginsRow=>(
      {event_id:marginsRow.event_id, isChanged:false}
    ))

    this.setState({
      updateParamBtnStatusArr: updateParamBtnStatusArr,
    })

    console.log('updateParamBtnStatusArr', updateParamBtnStatusArr)
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  setLaunchpadRowState(launchpadRowArr) {
    this.setState({
      launchpadRowArr,
    });
    console.log('launchpadRowArr STATE', this.state.launchpadRowArr);
  }

  handleLeagueSelectChange(selectedLeague) {
    let endpoint = '/launchpad/get_status?';
    const queryStr = "league=" + selectedLeague;

    this.setState({
      selectedLeague,
    })

    console.log('handleLeagueSelectChange', selectedLeague);
    this.fetchJSONData(endpoint, queryStr)
      .then(data => {
        this.setState({
          launchpadRowArr: data,
        })
      })

    endpoint = '/params/get_status?';
    this.fetchJSONData(endpoint, queryStr)
      .then(data => {
        this.setState({
          paramsRowArr: data,
        })
      })

    endpoint = '/margins/get_status?';
    this.fetchJSONData(endpoint, queryStr)
      .then(marginsRowArr => {
        this.setState({
          marginsRowArr: marginsRowArr,
        })

        this.setUpdateParamBtnStatusArr(marginsRowArr)
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

  handleMarginsChange(event_id, propName, value) {
    let marginsRowArr = this.state.marginsRowArr.slice()

    marginsRowArr.map((param) => {
      if (param.event_id === event_id) {
        param[propName] = value
      }

      return param;
    })

    this.setState({
      marginsRowArr,
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

    const launchpadRowArr = this.state.launchpadRowArr.slice().map(matchObj => {
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

    this.setLaunchpadRowState(launchpadRowArr)

    const statusBinary = btnStatus ? "1" : "0"
    const endpoint = "/launchpad/write?"
    const queryStr = "event_id=" + event_id + "&switch=" + switchMarket + "&status=" + statusBinary

    if (switchMarket === "master" && btnStatus)
      return;
    this.postData(endpoint, queryStr)
  }

  handleUpdateParamBtnStatusArr(event_id, isChanged){
    let updateParamBtnStatusArr=this.state.updateParamBtnStatusArr.slice()

    updateParamBtnStatusArr=updateParamBtnStatusArr.map(updateBtnObj=>{
      if(updateBtnObj.event_id===event_id){
        updateBtnObj.isChanged=isChanged
      }
    })

    this.setState({
      updateParamBtnStatusArr,
    })
  }


  render() {
    const { launchpadRowArr } = this.state
    const { paramsRowArr } = this.state
    const { selectedLeague } = this.state 
    const { marginsRowArr } = this.state
    const { updateParamBtnStatusArr } = this.state

    console.log('---------------------APP-----------------------------')
    console.table(launchpadRowArr);

    return (
      <div>
        <NavBar
          leagues={LEAGUESARR}
          email={EMAIL}
          selectedLeague={selectedLeague}
          onLeagueSelectChange={this.handleLeagueSelectChange}
        />
        <TabList
          launchpadRowArr={launchpadRowArr}
          paramsRowArr={paramsRowArr}
          marginsRowArr={marginsRowArr}
          updateParamBtnStatusArr={updateParamBtnStatusArr}
          onToggleBtnStatus={this.handleBtnToggle}
          onLambdaChange={this.handleLambdaChange}
          onMarginsChange={this.handleMarginsChange}
          onUpdateParamBtnStatusArr={this.handleUpdateParamBtnStatusArr}
        />
      </div>
    );
  }
}

export default App;
