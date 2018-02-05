import React, { Component } from 'react';


class LaunchpadTableHead extends Component {

    render() {

        return (
            <tr>
                <th scope="col" className="text-center">Kickoff</th>
                <th scope="col" className="text-center">League</th>
                <th scope="col" className="text-center">Id</th>
                <th scope="col" className="text-center">Name</th>
                <th scope="col" className="text-center">MASTER</th>
                <th scope="col" className="text-center">Goals</th>
                <th scope="col" className="text-center">Corners</th>
                <th scope="col" className="text-center">Team Cards</th>
                <th scope="col" className="text-center">H-p Cards</th>
                <th scope="col" className="text-center">A-p Cards</th>
                <th scope="col" className="text-center">H-gs</th>
                <th scope="col" className="text-center">A-gs</th>
            </tr>
        );
    }
}

export default LaunchpadTableHead;
