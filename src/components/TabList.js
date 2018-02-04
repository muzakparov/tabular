import React, { Component } from 'react';
import ActionDropdown from "./TabList/ActionDropdown";
import Table from "./TabList/Table";


class TabList extends Component {

    render() {
        const { matchRowArr } = this.props

        console.log('TabList', this.props.matchRowArr, '\n\n\n')

        return (
            <div className="container">
                <p>TABLIST</p>
                <p>TABLIST</p>
                <p>TABLIST</p>
                <p>TABLIST</p>
                <p>TABLIST</p>
                <p>TABLIST</p>
                {/* table */}
                <ActionDropdown />
                <Table matchRowArr={matchRowArr} />
            </div>
        );
    }
}

export default TabList;
