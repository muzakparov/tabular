import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

import LaunchpadTableHead from "./LaunchpadTable/LaunchpadTableHead";
import LaunchpadTableRow from "./LaunchpadTable/LaunchpadTableRow";


class LaunchpadTable extends Component {

    handleButtonClick(id, masterBtnId) {

        // console.log('click handleButtonClick');

        let allBtns = this.state.allBtns.slice();
        let masterBtnIndex;
        let masterBtnNew;
        let buttonsListNew;
        let totalOffCount = 0;

        // console.log('allBtns OLD',allBtns);

        allBtns.forEach((masterBtn, i) => {
            let masterBtnObj = masterBtn.masterBtn;
            if (masterBtnObj.id === masterBtnId) {
                masterBtnNew = { ...masterBtnObj };
                buttonsListNew = masterBtnNew.buttonsList.slice();

                buttonsListNew.forEach((btn) => {
                    // console.log('btn',btn.id, id);


                    if (btn.id === id) {
                        // console.log("inside")
                        btn.isActive = !btn.isActive;

                        if (btn.isActive) {
                            masterBtnNew.isActive = true;
                        }

                        masterBtnNew.buttonsList = buttonsListNew;
                        // console.log('masterBtnNew',masterBtnNew);
                        masterBtnIndex = i;

                    }

                    if (!btn.isActive) {
                        totalOffCount++;
                    }
                });


            }


        });
        if (totalOffCount === buttonsListNew.length) {
            console.log("MASTER BUTT XXX", masterBtnNew);
            masterBtnNew.isActive = false;
        }

        allBtns.splice(masterBtnIndex, 1, { masterBtn: masterBtnNew });

        // console.log('allBtns NEW',allBtns);
        console.log('\n');
        this.setState({
            allBtns: allBtns,
        });
    }

    handleMasterBtnClick(masterBtnId) {
        // console.log("master click", masterBtnId);

        let masterBtnObjIndex;
        let masterBtnObjNew;
        let allBtns = this.state.allBtns.slice();

        let doNothing = false;

        allBtns.forEach((masterBtnObj, i) => {
            if (masterBtnObj.masterBtn.id === masterBtnId) {
                masterBtnObjIndex = i;
                masterBtnObjNew = { ...masterBtnObj };

                masterBtnObjNew.masterBtn.isActive = !masterBtnObjNew.masterBtn.isActive;
                if (masterBtnObjNew.masterBtn.isActive) {
                    doNothing = true;
                }
                // console.log('masterBtnObjNew isActive',masterBtnObjNew.isActive);
                masterBtnObjNew.masterBtn.buttonsList.forEach(btn => {
                    btn.isActive = masterBtnObjNew.masterBtn.isActive;
                });
            }
        });

        //dont change master button if it is ON
        if (doNothing)
            return

        allBtns.splice(masterBtnObjIndex, 1, masterBtnObjNew);

        this.setState({
            allBtns,
        });
    }


    render() {
        // console.log('TABLE', this.props.matchRowArr, '\n\n\n')

        const { matchRowArr } = this.props

        const tableRowsList = matchRowArr.map(matchRow => {
            return (
                <LaunchpadTableRow
                    key={matchRow.event_id}
                    {...matchRow}
                    onToggleBtnStatus={this.props.onToggleBtnStatus}
                />
            );
        });

        return (
            <div>
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <NavLink
                            to="/"
                            className="nav-link"                            
                            activeClassName="activeX"
                        >
                            LaunchpadTable
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            to="/other"
                            className="nav-link"
                            activeClassName="activeX"
                        >
                            OtherComponent
                        </NavLink>
                    </li>                    
                </ul>
                <table className="table table-striped table-condensed table-bordered">
                    <thead>
                        <LaunchpadTableHead />
                    </thead>
                    <tbody>
                        {tableRowsList}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default LaunchpadTable;
