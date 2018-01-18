import React, { Component } from 'react';


class Status extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div style={{ backgroundColor: '#737373' }} >
                <div className="Row" >
                    <div class="container">
                        <div class="row">
                            <div class="col-sm -3">
                                <h3><b><i class="fa fa-map-marker" aria-hidden="true">{this.props.location}</i> </b></h3>
                            </div>
                            <div class="col-sm-3">
                                <h4>Open</h4>
                                {this.props.opentime}
                            </div>
                            <div class="col-sm-3">
                                <h4>Close</h4>
                                {this.props.closetime}
                            </div>
                            <div class="col-sm-3">
                                <h4>Duration</h4>
                                {this.props.duration}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }

}

export default Status;