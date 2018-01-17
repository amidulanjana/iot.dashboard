import React, { Component } from 'react';
import { compose, withProps, withStateHandlers } from "recompose";
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps"


const { InfoBox } = require("react-google-maps/lib/components/addons/InfoBox");


const MyMapComponent = compose(
    withProps({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `400px` }} />,
        mapElement: <div style={{ height: `100%` }} />,
    }),
    withScriptjs,
    withGoogleMap)((props) => {
        return (
            <GoogleMap
                defaultZoom={8}
                defaultCenter={{ lat: -34.397, lng: 150.644 }}
            >

                {props.isMarkerShown &&
                    <Marker
                        position={{ lat: -34.397, lng: 150.644 }}
                        onClick={props.onToggleOpen}
                        options={{
                            icon: {
                                url: 'http://www.myiconfinder.com/uploads/iconsets/256-256-a5485b563efc4511e0cd8bd04ad0fe9e.png',
                                scaledSize: { width: 40, height: 40 }
                            }
                        }}
                    >
                        {
                            props.InfoWindowOpen &&
                            <InfoWindow onCloseClick={props.onToggleOpen}>
                                <div>amila</div>
                            </InfoWindow>
                        }
                    </Marker>}
            </GoogleMap>
        )
    })

const DivT=(props)=>{
    //debugger;
    return(
        <div onClick={props.onClick}>
        {
            props.InfoWindowOpen && <div>aaaaaa</div>
        }
        </div>
    )
}


class Map extends Component {

    state = {
        isOpen: true,
        isMarkerShown: true
    }

    onToggleOpen() {
        debugger;
        this.state.isOpen = !this.state.isOpen
        this.state.isMarkerShown = false
        console.log()
       
    }


    render() {
        return (
            <React.Fragment>
                <div className="row">
                    <div className="col-sm-3">
                        <h3>All Devices</h3>
                        <div className="row" style={style.status}>
                            <div className="col" style={style.critical}>
                                <i className="fa fa-exclamation-triangle" aria-hidden="true">
                                    <span style={{ fontSize: '18px' }}> 03</span>
                                </i>
                                <h4>Critical</h4>
                            </div>
                            <div className="col" style={style.warnning}>
                                <i className="fa fa-exclamation" aria-hidden="true">
                                    <span style={{ fontSize: '18px' }}> 03</span>
                                </i>
                                <h4>Warnnings</h4>
                            </div>

                        </div>
                    </div>
                    <div className="col-sm-9">
                        
                        <MyMapComponent
                            onToggleOpen={this.onToggleOpen.bind(this)}
                            InfoWindowOpen={this.state.isOpen}
                            isMarkerShown={this.state.isMarkerShown}
                        />
                        <DivT InfoWindowOpen={this.state.isOpen}
                        onClick={this.onToggleOpen.bind(this)}
                        onToggleOpen={this.onToggleOpen.bind(this)}/>
                    </div>
                </div>

            </React.Fragment>
        );
    }
}

const style = {
    status: {
        position: 'absolute',
        bottom: '0'
    },
    critical: {
        textAlign: 'center',
        color: '#ed524e'
    },
    warnning: {
        textAlign: 'center',
        color: 'rgb(237, 166, 78)'
    }
}

export default Map;