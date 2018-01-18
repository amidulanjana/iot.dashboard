import React, { Component } from 'react';
import Card from './widgets/Card'
import ColdRoomCard from './widgets/ColdRoomCard'
import Chart from './widgets/Chart'

//Data for the table
const data = [
    { name: '10.00', Sensor_1: 4, Sensor_2: -1, Sensor_3: 2 },
    { name: '10.05', Sensor_1: 3, Sensor_2: 3, Sensor_3: 4 },
    { name: '10.10', Sensor_1: 2, Sensor_2: 9.8, Sensor_3: 6 },
    { name: '10.15', Sensor_1: 2, Sensor_2: 3, Sensor_3: 1 },
    { name: '10.20', Sensor_1: 18, Sensor_2: 19, Sensor_3: 21 },
    { name: '10.25', Sensor_1: 2, Sensor_2: 3.7, Sensor_3: 2.5 },
    { name: '10.30', Sensor_1: 3, Sensor_2: 4, Sensor_3: 2 },
];

const data1 = [
    { name: '10.00', Sensor_1: 4, Sensor_2: -1, Sensor_3: 4, Sensor_4: 4, Sensor_5: -1, Sensor_6: 2 },
    { name: '10.05', Sensor_1: 3, Sensor_2: 3, Sensor_3: 4, Sensor_4: 4, Sensor_5: -1, Sensor_6: 2 },
    { name: '10.10', Sensor_1: 2, Sensor_2: 9.8, Sensor_3: 6, Sensor_4: 4, Sensor_5: -1, Sensor_6: 2 },
    { name: '10.15', Sensor_1: 2, Sensor_2: 3, Sensor_3: 1, Sensor_4: 4, Sensor_5: -1, Sensor_6: 2 },
    { name: '10.20', Sensor_1: 18, Sensor_2: 19, Sensor_3: 21, Sensor_4: 4, Sensor_5: -1, Sensor_6: 2 },
    { name: '10.25', Sensor_1: 2, Sensor_2: 3.7, Sensor_3: 2.5, Sensor_4: 4, Sensor_5: -1, Sensor_6: 2 },
    { name: '10.30', Sensor_1: 3, Sensor_2: 4, Sensor_3: 2, Sensor_4: 4, Sensor_5: -1, Sensor_6: 2 },
];

const sensorData = [
    { name: "Sensor_1", stroke: "#8884d8" },
    { name: "Sensor_2", stroke: "#82ca9d" },
    { name: "Sensor_3", stroke: "#b30059" }
];

const sensorData1 = [
    { name: "Sensor_1", stroke: "#8884d8" },
    { name: "Sensor_2", stroke: "#82ca9d" },
    { name: "Sensor_3", stroke: "#b30059" },
    { name: "Sensor_4", stroke: "#8884d8" },
    { name: "Sensor_5", stroke: "#82ca9d" },
    { name: "Sensor_6", stroke: "#b30059" },
];


class Test1 extends Component {
    render() {
        return (
            <div>
                <Chart data={data} yAxisLabel={"Temperature - `C"} xAxisLabel={"Time"} sensorData={sensorData} />
                <br />
                {<Chart data={data1} yAxisLabel={"Humidity "} xAxisLabel={"Time"} sensorData={sensorData1} />}
            </div>
        );
    }
}

export default Test1;