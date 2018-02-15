import React, { Component } from 'react';


import TableNavigation from './TableNavigation';


class PricesNav extends Component {

    render() {

        return (
            <div>             
                <TableNavigation activeKey="4" /> 
               <div>PricesNav</div>                
            </div>
        );
    }
}

export default PricesNav;
