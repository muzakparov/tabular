import React, { Component } from 'react';

import {  MONTH_NAMES } from '../../../constants'

class KickoffDateLabel extends Component {

    render() {
        const { kickoff } = this.props

        //format date
        const kickoffDate = new Date(kickoff)
        const today = new Date()

        let correctDateFormat;

        const kickoffDay = kickoffDate.getDate()
        const todayDay=today.getDate()
        
        if(kickoffDay===todayDay){
            correctDateFormat = ("Today "+kickoffDate.getHours()+":"
            + (kickoffDate.getMinutes()<10?'0':'')+kickoffDate.getMinutes());
        }else if(kickoffDay===todayDay+1){
            correctDateFormat="Tomorrow"
        }else{
            const suffix = (kickoffDay===1)?"st":(kickoffDay===2?"nd":(kickoffDay===3?"rd":"th"))

            correctDateFormat=(kickoffDay+`${suffix} `+ MONTH_NAMES[kickoffDate.getMonth()])
        }

        return (
            <span
                className={
                    "label " + (correctDateFormat.indexOf("Today") !== -1 ? "label-warning" :
                        (correctDateFormat.indexOf("Tomorrow") !== -1 ? "label label-primary" : "")
                    )
                }>
                {correctDateFormat}
            </span>
        );
    }
}

export default KickoffDateLabel;
