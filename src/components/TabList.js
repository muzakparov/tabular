import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Redirect,
} from "react-router-dom";
import { Switch } from "react-router";

import LaunchpadTable from "./TabList/LaunchpadTable";
import OtherComponent from "./OtherComponent";
import ParametersNav from "./ParametersNav";
import MarginsNav from "./MarginsNav";
import PricesNav from "./PricesNav";

class TabList extends Component {    

    render() {
        const { matchRowArr } = this.props
        const { paramsRowArr } = this.props
        

        return (
            <div>
                {/* table */}
                <Router>
                    <Switch>
                        <Route exact 
                            path="/" 
                            render={
                                ()=><LaunchpadTable
                                            matchRowArr={matchRowArr}
                                            onToggleBtnStatus={this.props.onToggleBtnStatus}
                                        />
                            }
                        />
                        <Route path="/parameters" 
                            render={
                                ()=><ParametersNav
                                        paramsRowArr={paramsRowArr}
                                        onLambdaChange={this.props.onLambdaChange}                                            
                                    />
                            }                                
                        />
                        <Route path="/margins" component={MarginsNav} />
                        <Route path="/prices" component={PricesNav} />
                        <Route path="/other" component={OtherComponent} />
                       
                        {/* <Redirect from="/*" to="/404" /> */}
                    </Switch>
                </Router>
                
            </div>
        );
    }
}

export default TabList;
