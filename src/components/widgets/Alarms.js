import React, { Component } from 'react';

class Alarm extends Component {
    render() {
        return (
            <React.Fragment>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Severity</th>
                            <th scope="col">Incident</th>
                            <th scope="col">Occurrences</th>
                            <th scope="col">Explore</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Pressure</td>
                            <td> <i className="fa fa-caret-up" aria-hidden="true" style={{color:'rgb(237, 82, 78)'}}/> Critical</td>
                            <td>2018/01/09 8.10</td>
                            <td>1</td>
                            <td><i className="fa fa-ellipsis-h" aria-hidden="true"></i></td>
                        </tr>
                        <tr>
                            <td>Low Fuel</td>
                            <td> <i className="fa fa-circle" aria-hidden="true" style={{color:'#6e6eff'}}/> Info</td>
                            <td>2018/01/09 8.10</td>
                            <td>1</td>
                            <td><i className="fa fa-ellipsis-h" aria-hidden="true"></i></td>
                        </tr>
                        <tr>
                            <td>High Temp</td>
                            <td> <i className="fa fa-caret-up" aria-hidden="true" style={{color:'rgb(237, 82, 78)'}}/> Critical</td>
                            <td>2018/01/09 8.10</td>
                            <td>1</td>
                            <td><i className="fa fa-ellipsis-h" aria-hidden="true"></i></td>
                        </tr>
                        <tr>
                            <td>Low Pressure</td>
                            <td>  <i className="fa fa-exclamation" aria-hidden="true" style={{color:'rgb(237, 166, 78)'}}/> Warning</td>
                            <td>2018/01/09 8.10</td>
                            <td>1</td>
                            <td><i className="fa fa-ellipsis-h" aria-hidden="true"></i></td>
                        </tr>
                        <tr>
                            <td>Pressure</td>
                            <td> <i className="fa fa-caret-up" aria-hidden="true" style={{color:'rgb(237, 82, 78)'}}/> Critical</td>
                            <td>2018/01/09 8.10</td>
                            <td>1</td>
                            <td><i className="fa fa-ellipsis-h" aria-hidden="true"></i></td>
                        </tr>
                        <tr>
                            <td>Pressure</td>
                            <td> <i className="fa fa-caret-up" aria-hidden="true" style={{color:'rgb(237, 82, 78)'}}/> Critical</td>
                            <td>2018/01/09 8.10</td>
                            <td>1</td>
                            <td><i className="fa fa-ellipsis-h" aria-hidden="true"></i></td>
                        </tr>
                        <tr>
                            <td>Low Fuel</td>
                            <td> <i className="fa fa-circle" aria-hidden="true" style={{color:'#6e6eff'}}/> Info</td>
                            <td>2018/01/09 8.10</td>
                            <td>1</td>
                            <td><i className="fa fa-ellipsis-h" aria-hidden="true"></i></td>
                        </tr>
                        <tr>
                            <td>High Temp</td>
                            <td> <i className="fa fa-caret-up" aria-hidden="true" style={{color:'rgb(237, 82, 78)'}}/> Critical</td>
                            <td>2018/01/09 8.10</td>
                            <td>1</td>
                            <td><i className="fa fa-ellipsis-h" aria-hidden="true"></i></td>
                        </tr>
                        <tr>
                            <td>Low Pressure</td>
                            <td>  <i className="fa fa-exclamation" aria-hidden="true" style={{color:'rgb(237, 166, 78)'}}/> Warning</td>
                            <td>2018/01/09 8.10</td>
                            <td>1</td>
                            <td><i className="fa fa-ellipsis-h" aria-hidden="true"></i></td>
                        </tr>
                       

                    </tbody>
                </table>
            </React.Fragment>
        );
    }
}

export default Alarm;