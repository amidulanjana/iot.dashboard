import React, { Component } from 'react';

import Map from './widgets/Map'
import Card from './widgets/Card'
import Chart from './widgets/Chart'
import Alarm from './widgets/Alarms'

import TestMap from './widgets/TestMap'

class Temperature extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="row">
                    <div className="col col-sm-8">
                        <Card
                            header="Device Locations"
                            content={<Map />} />
                    </div>

                    <div className="col col-sm-4">
                        <Card
                            header="System Alarms"
                            content={<Alarm/>}
                        />
                    </div>

                </div>
                <div className="row">
                    <div className="col col-sm-8">
                        <Card
                            header="Device Locations"
                            content={ <Chart/>} />
                       
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Temperature;