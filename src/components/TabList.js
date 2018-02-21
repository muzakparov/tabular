import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
} from "react-router-dom";
import { Switch } from "react-router";

import LaunchpadTable from "./TabList/LaunchpadTable";
import OtherComponent from "./OtherComponent";
import ParametersNav from "./ParametersNav";
import MarginsNav from "./MarginsNav";
import PricesNav from "./PricesNav";
import BootstrapTable from "./BootstrapTable";

class TabList extends Component {

    render() {
        const { launchpadRowArr } = this.props
        const { paramsRowArr } = this.props
        const { marginsRowArr } = this.props      
        const { updateParamBtnStatusArr } = this.props  

        return (
            <div>
                <Router>
                    <Switch>
                        <Route exact
                            path="/"
                            render={
                                () => <LaunchpadTable
                                    launchpadRowArr={launchpadRowArr}
                                    onToggleBtnStatus={this.props.onToggleBtnStatus}
                                />
                            }
                        />
                        <Route path="/parameters"
                            render={
                                () => <ParametersNav
                                    paramsRowArr={paramsRowArr}
                                    onLambdaChange={this.props.onLambdaChange}
                                    updateParamBtnStatusArr={updateParamBtnStatusArr}
                                    onUpdateParamBtnStatusArr={this.props.onUpdateParamBtnStatusArr}
                                />
                            }
                        />
                        <Route path="/margins"
                            render={
                                () => <MarginsNav
                                    marginsRowArr={marginsRowArr}
                                    onMarginsChange={this.props.onMarginsChange}
                                />
                            }
                        />
                        <Route path="/prices" component={PricesNav} />
                        <Route path="/other" component={OtherComponent} />
                        <Route path="/table" component={BootstrapTable} />
                        {/* <Redirect from="/*" to="/404" /> */}
                    </Switch>
                </Router>

            </div>
        );
    }
}

export default TabList;
