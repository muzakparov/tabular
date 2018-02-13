import React from 'react';


function ParamsTableHead(props) {
    return (
        <thead>
            <tr>
                <th className="text-center"></th>
                <th className="text-center"></th>
                <th className="text-center"></th>
                <th className="text-center"></th>
                <th className="text-center"></th>
                <th colSpan="2" className="text-center">Goals</th>
                <th colSpan="2" className="text-center">Corners</th>
                <th colSpan="2" className="text-center">Cards</th>
                <th></th>
            </tr>
            <tr>
                <th className="text-center">Kickoff</th>
                <th className="text-center">League</th>
                <th className="text-center">Id</th>
                <th className="text-center">Name</th>
                <th className="text-center">Parameters</th>
                <th className="text-center">home</th>
                <th className="text-center">away</th>
                <th className="text-center">home</th>
                <th className="text-center">away</th>
                <th className="text-center">home</th>
                <th className="text-center">away</th>
                <th></th>
            </tr>
        </thead>
    );
}

export default ParamsTableHead;