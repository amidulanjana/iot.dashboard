import React, { Component } from 'react';

class ColdRoomCard extends Component {

    render() {
        return (
            <div className="card">
                <div className="card-header"> <i class="fa fa-thermometer-three-quarters" aria-hidden="true"></i> {this.props.header}</div>
                <div className="card-body">
                </div>
            </div>
        );
    }
}

export default ColdRoomCard ;