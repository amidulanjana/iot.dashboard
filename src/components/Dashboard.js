import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Card from './widgets/Card'
import Map from './widgets/Map'
import Alarms from './widgets/Alarms';

class Dashboard extends Component {
    render() {
        return (
            <React.Fragment>
                <Card
                    header="Dashboard"
                    content={<Map />}
                />
                <br />
                <Card
                    header="Alarms"
                    content={<Alarms />}
                />
            </React.Fragment>
        );
    }
}

export default Dashboard;
