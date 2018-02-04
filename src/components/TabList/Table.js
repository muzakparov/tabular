import React, { Component } from 'react';

import TableRow from "./Table/TableRow";
import ButtonRow from "./Table/ButtonRow";




class Table extends Component {
    constructor() {
        super();

        this.state = {
            // allBtns: [{
            //     masterBtn: {
            //         id: 1,
            //         isActive: true,
            //         buttonsList: [
            //             { id: 1, isActive: false },
            //             { id: 2, isActive: true },
            //             { id: 3, isActive: false },
            //         ],
            //     },
            // },
            // ],
            matchRowArr: [],
        };

        this.handleButtonClick = this.handleButtonClick.bind(this);
        this.handleMasterBtnClick = this.handleMasterBtnClick.bind(this);
    }

    

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
        // const matchRowArr = this.state.matchRowArr.slice();

        // let t = 0
        // const buttonRowsList = matchRowArr.map((allBtn, i) => {
        //     if (t === 0) {
        //         // console.log('Before allBtn', allBtn);
        //         t++;
        //     }

        //     return (
        //         <ButtonRow
        //             key={i}
        //             allBtns={allBtns}
        //             masterBtnId={allBtn.masterBtn.id}
        //             buttonsList={allBtn.masterBtn.buttonsList}
        //             onButtonClick={this.handleButtonClick}
        //         />);
        // });

        // const tableRowsList = allBtns.map((allBtn, i) => {
        //     return (
        //         <TableRow
        //             key={i}
        //             masterBtnId={allBtn.masterBtn.id}
        //             isActive={allBtn.masterBtn.isActive}
        //             allBtns={this.state.allBtns}
        //             onMasterBtnClick={this.handleMasterBtnClick}
        //         />
        //     );
        // });

        return (
            <div>
                {/* <div className="row">
                    <div className="col-md-6">
                        <ul className="list-inline text-center" style={{ marginTop: "20px", marginBottom: "20px" }}></ul>
                        <table className="table table-striped table-condensed table-bordered">
                            <thead>
                                <tr>
                                    <th className="text-center">Kickoff</th>
                                    <th className="text-center">League</th>
                                    <th className="text-center">Id</th>
                                    <th className="text-center">Name</th>
                                    <th className="text-center">Master</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tableRowsList}
                            </tbody>
                        </table>
                    </div >

                    <div className="col-md-6">
                        <div className="col-md-6">
                            <ul className="list-inline text-center" style={{ marginTop: "20px", marginBottom: "20px" }}></ul>
                            <table className="table table-striped table-condensed table-bordered">
                                <thead>
                                    <tr>
                                        <th className="text-center">Goals</th>
                                        <th className="text-center">Corners</th>
                                        <th className="text-center">Team Cards</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {buttonRowsList}
                                </tbody>
                            </table>
                        </div>

                    </div>
                    <div className="text-center">
                        <ul className="pagination" style={{ marginTop: "10px", marginBottom: "5px" }}>
                            <li className="active">
                                <a>1</a>
                            </li>
                            <li className="">
                                <a>2</a>
                            </li>
                        </ul>
                    </div >
                </div> */}
            </div>
        );
    }
}

export default Table;
