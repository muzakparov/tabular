import React from 'react';


function LaunchpadTableHead(props){
    const thList = props.headers.map(th=>(
        <th scope="col" className="text-center" key={th}>{th}</th>
    ));

    return (
        <tr>
            {thList}
        </tr>
    );
    
}

export default LaunchpadTableHead;
