import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class LeftNav extends Component {
    render() {
        return (

            <div className="collapse d-md-flex bg-faded pt-2 h-100" id="sidebar">
                <ul className="nav flex-column">
                    <li className="nav-item company-name"><span className="nav-link">
                        <i className="fa fa-building" aria-hidden="true" /> SunShine</span>
                    </li>
                    <li className="nav-item">
                        <Link to={'/'} className="nav-link"><i className="fa fa-tachometer" aria-hidden="true" /> Dashboard</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={'/test1'} className="nav-link">Location_1</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={'/location2'} className="nav-link">Location_2</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={'/test1'} className="nav-link">Location_3</Link>
                    </li>

                    {/* <li className="nav-item">
                        <a className="nav-link collapsed" href="#submenu1" data-toggle="collapse" data-target="#submenu1">Reports</a>
                        <div className="collapse" id="submenu1" aria-expanded="false">
                            <ul className="flex-column pl-2 nav">
                                <li className="nav-item"><a className="nav-link py-0" href="">Orders</a></li>
                                <li className="nav-item">
                                    <a className="nav-link collapsed py-0" href="#submenu1sub1" data-toggle="collapse" data-target="#submenu1sub1">Customers</a>
                                    <div className="collapse small" id="submenu1sub1" aria-expanded="false">
                                        <ul className="flex-column nav pl-4">
                                            <li className="nav-item">
                                                <a className="nav-link p-0" href="">
                                                    <i className="fa fa-fw fa-clock-o"></i> Daily
                                            </a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link p-0" href="">
                                                    <i className="fa fa-fw fa-dashboard"></i> Dashboard
                                            </a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link p-0" href="">
                                                    <i className="fa fa-fw fa-bar-chart"></i> Charts
                                            </a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link p-0" href="">
                                                    <i className="fa fa-fw fa-compass"></i> Areas
                                            </a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="nav-item"><a className="nav-link" href="#">Analytics</a></li>
                    <li className="nav-item"><a className="nav-link" href="#">Export</a></li> */}
                </ul>
            </div>

        );
    }
}

export default LeftNav;