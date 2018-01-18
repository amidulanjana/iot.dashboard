import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, AxisLabel, Label } from "recharts"
import React, { Component } from 'react';



class Chart extends Component {
    constructor(props) {
        super(props);

    }



    render() {
        return (
            <LineChart width={600} height={300} data={this.props.data}>
                <XAxis dataKey="name" padding={{ left: 30, right: 30 }} label={{ value: this.props.xAxisLabel, position: "insideBottomRight", dy: 10, stroke: '#666666' }} />
                <YAxis label={{ value: this.props.yAxisLabel, angle: -90, dy: 10, stroke: '#666666' }} />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Legend />
                {this.props.sensorData && this.props.sensorData.map((sensor) => (
                    <Line key={sensor.name} type="monotone" dataKey={sensor.name} stroke={sensor.stroke} />
                ))}


            </LineChart>

        );
    }
}

export default Chart;