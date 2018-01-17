import  {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from "recharts"
import React, { Component } from 'react';

const data = [
      {name: '10.00', uv: 4000, pv: 2400, amt: 2400},
      {name: '10.05', uv: 3000, pv: 1398, amt: 2210},
      {name: '10.10', uv: 2000, pv: 9800, amt: 2290},
      {name: '10.15', uv: 2780, pv: 3908, amt: 2000},
      {name: '10.20', uv: 1890, pv: 4800, amt: 2181},
      {name: '10.25', uv: 2390, pv: 3800, amt: 2500},
      {name: '10.30', uv: 3490, pv: 4300, amt: 2100},
];
//const LineChart = React.createClass({

    class SLineChart extends Component {
	render () {
  	return (
    <LineChart width={600} height={300} data={data}>
       <XAxis dataKey="name" padding={{left: 30, right: 30}}/>
       <YAxis/>
       <CartesianGrid strokeDasharray="3 3"/>
       <Tooltip/>
       <Legend />
       <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{r: 8}}/>
       <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        <Line type="monotone" dataKey="amt" stroke="#b30059" />
      </LineChart>
    );
  }
}

export default SLineChart;