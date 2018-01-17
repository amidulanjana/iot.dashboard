import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import AlarmCard from './widgets/AlarmCard'

class Alarm extends Component {
    constructor(props) {
        super(props)
        this.state = {isOn:false}
    }

    render() {
        var a = {location:"Colombo", Severity:"Normal", Incident_Time:"2018.01.12-12.34:00",Type:"Temperature"};
        return (
            <AlarmCard 
                 header="System Alarms"
                 data= {a}
            />
        );
    }
}

export default Alarm;

