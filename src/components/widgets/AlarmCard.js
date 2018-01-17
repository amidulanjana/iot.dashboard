import React, { Component } from 'react';

class AlarmCard extends Component {

    render() {
        return (
            <div className="card">
                <div className="card-header"><i class="fa fa-exclamation-triangle" aria-hidden="true"></i> {this.props.header}</div>
                <div className="card-body">
                    {this.props.data.location}
                    <br/>
                    {this.props.data.Severity}
                    <br/>
                    {this.props.data.Incident_Time}
                    <br/>
                    {this.props.data.Type}
                </div>
            </div>
        );
    }
}

export default AlarmCard ;