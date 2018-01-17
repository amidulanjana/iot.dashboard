import React, { Component } from 'react';
import Card from './widgets/Card'
import ColdRoomCard from './widgets/ColdRoomCard'
import SLineChart from './widgets/SLineChart'

class Test1 extends Component {
    render() {
        return (
            <div>
                <ColdRoomCard
                header={"Cool Room Sensor readings" } 
                content={"sds"}
                />
                <SLineChart/>
            </div>
        );
    }
}

export default Test1;