import React, { Component } from 'react';
import ActionDropdown from "./TabList/ActionDropdown";
import Table from "./TabList/Table";



class TabList extends Component {

    componentDidMount(){
        console.log('componentDidMount');
        const url = "https://trader-dot-exotic-parameter-predictions.appspot.com/get_status?league=ITA.1";

        jsonp(url,function(err, data){
            if (err) throw err;
            console.log('cb', data);
        });
              
    }
    


    render() {
        return (
            <div style={{marginTop:"70px"}}>
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <a className="nav-link active" data-toggle="tab" href="#home">Upcoming</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" data-toggle="tab" href="#profile">Goals Grid</a>
                    </li>                   
                </ul>
                <div id="myTabContent" className="tab-content">
                    <div className="tab-pane fade show active" id="home">
                        {/* table */}
                        <ActionDropdown />
                        <Table />
                    </div>
                    <div className="tab-pane fade" id="profile">
                        <p>Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit.</p>
                    </div>
                    
                </div>
            </div>
        );
    }
}

export default TabList;
