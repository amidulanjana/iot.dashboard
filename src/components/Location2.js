import React, { Component } from 'react';
import Card from './widgets/Card';
import ColdRoomCard from './widgets/ColdRoomCard';
import SLineChart from './widgets/SLineChart';
import Status from './widgets/Status';

//Data for the table
const data = [
    { name: '10.00', Sensor_1: true },
    { name: '10.05', Sensor_1: false },
    { name: '10.10', Sensor_1: false },
    { name: '10.15', Sensor_1: 1 },
    { name: '10.20', Sensor_1: false },
    { name: '10.25', Sensor_1: false },
    { name: '10.30', Sensor_1: true },
];

const sensorData = [
    { name: "Sensor_1", stroke: "#8884d8" }
];

class Location2 extends Component {
    render() {
        return (
            <div>
                <Card header="Door Status"
                    content={<Status location=" Cool Room" opentime="3.15pm" closetime="3.20pm" duration="5 mins" />} />
            </div>
        );
    }
}

export default Location2;