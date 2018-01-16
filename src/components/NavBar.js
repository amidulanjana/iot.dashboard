import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            // position-fixed
            <React.Fragment>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark position-fixed">
                    {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button> */}

                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to={'/NewPRSupportForm'} className="nav-link">New Support PR Form >></Link>
                        </li>
                    </ul>

                </nav>
            </React.Fragment>
        );
    }
}

export default Navbar;