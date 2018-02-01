import React, { Component } from 'react';

import TableRow from "./Table/TableRow";
import ButtonRow from "./Table/ButtonRow";

class Table extends Component {
    constructor(){
        super();

        this.state = {
            buttonsList:[
                {id:1, isActive:false},
                {id:2, isActive:true},
                {id:3, isActive:false},
            ],
        }

        this.handleButtonClick=this.handleButtonClick.bind(this);

    }

    handleButtonClick(id){

        let buttonsList = this.state.buttonsList.slice();

        buttonsList.forEach((btn, i)=>{
            if(btn.id==id){
                btn.isActive=!btn.isActive;
            }                
        });

        this.setState({
            buttonsList:buttonsList,
        });
    }

    render() {
        return (
            <div>
                <div className="row">
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
                                <TableRow />                               
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
                                <ButtonRow 
                                    buttonsList={this.state.buttonsList}
                                    onButtonClick={this.handleButtonClick}
                                />
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
            </div>
        </div>
        );
    }
}

export default Table;
