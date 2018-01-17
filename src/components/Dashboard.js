import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Card from './widgets/Card'

class Dashboard extends Component {
    render() {
        return (
            <Card 
                 header="Dashboard"
                content="--------------------------------"
            />
        );
    }
}

export default Dashboard;
