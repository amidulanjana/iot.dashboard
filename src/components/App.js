import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Navbar from './NavBar'
import LeftNav from './LeftNav'
import Temperature from './Temperature'
import Test1 from './Test1'
import Location2 from './Location2'
import Alarm from './Alarm'
import Dashboard from './Dashboard'

class App extends Component {

  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          <React.Fragment>
            {/* <Navbar /> */}
            <div className="row main" style={{ background: '' }} >
              <LeftNav />
              <div className="top-nav row">
                <div className="col col-sm-10">
                  <h6> Dashboard</h6>
                  <h6 style={{ float: 'right' }}>SunShine IOT Suite Remote Monitoring</h6>
                </div>
                <div className="col col-sm-2">
                  <h6 style={{ display: 'inline-block' }}>Amila Dulanjana</h6>
                  <img src="https://lh3.googleusercontent.com/B4Rmc8NPG7fHIGmN65214ppzNGHNa_wuLSSJ6Dz85KJoZ0zlBFnpH16pOJBHpwA0fCs=w300" alt="" className="profile-pic" />
                  7
                </div>
              </div>
                
            
                <div className="content " style={{ background: '' }} >
                  <Route exact path="/" component={Dashboard} />
                  <Route path="/test1" component={Test1} />
                  <Route path="/location2" component={Location2} />
                </div>

                <div className="content2 " style={{ background: '' }} >
                  <Alarm/>
                  <br/>
                  <Alarm/>
                  <br/>
                  <Alarm/>
                  <br/>
                  <Alarm/>
                  <br/>
                  <Alarm/>
                  
                </div>
                </div>
              
            

             
           

          </React.Fragment>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default App;
