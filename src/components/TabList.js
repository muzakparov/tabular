import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Redirect,
} from "react-router-dom";
import { Switch } from "react-router";

// import ActionDropdown from "./TabList/ActionDropdown";
import LaunchpadTable from "./TabList/LaunchpadTable";
import OtherComponent from "./OtherComponent";


class TabList extends Component {

    render() {
        const { matchRowArr } = this.props

        // console.log('TabList', this.props.matchRowArr, '\n\n\n')
        
        return (
            <div className="container">
                {/* table */}
                {/* <ActionDropdown /> */}
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
                        <Route path="/other" component={OtherComponent} />
                       
                        {/* <Redirect from="/*" to="/404" /> */}
                    </Switch>
                </Router>
                
            </div>
        );
    }
}

export default TabList;
