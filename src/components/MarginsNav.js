import React, { Component } from 'react';

import TableNavigation from './TableNavigation';
import MarginsTable from './MarginsNav/MarginsTable';


class MarginsNav extends Component {

    render() {
        const { marginsRowArr } = this.props 
        const { onMarginsChange } = this.props

        return (        
            <div>
                <TableNavigation activeKey="3" />
                <div style={{overflowX:"scroll", height:"490px", overflowY:"scroll"}}>
                    <MarginsTable 
                        marginsRowArr={marginsRowArr}
                        onMarginsChange={onMarginsChange}
                    />                   
                </div>
            </div>
        );
    }
}

export default MarginsNav;
