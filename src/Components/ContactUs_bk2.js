import React, {Component} from "react"
// import ReactDOM from 'react-dom'

import Map, { Marker, InfoWindow, GoogleApiComponent } from 'google-maps-react';
import '../App.css';


 
export default class ContactUs extends Component {
  /*
  constructor(props) {
    super(props);
    console.log("ContactUs init");
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {}
    }
  }

  onMapMoved = (props, map) => {
    const center = map.center;
  }

  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }

  onInfoWindowClose = () => {
    this.setState({
      showingInfoWindow: false,
      activeMarker: null
    });
  }

  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  }
  */

 
  render() {
    // const MY_API_KEY = "AIzaSyA0QyCpYLYV8okMd6M5DUWtiAvExGAj4QQ";
    /*
    if (!this.props.loaded) {
      return <div>Loading...</div>
    }
    */
    
    return (
      <div style={{height:'300px', width:'500px'}}>
      <Map google={window.google} 
          initialCenter={{
              lat: 48.61021668181817,
              lng: 9.103665540909093
            }}
          style={{width: '100%', height: '100%', position: 'relative'}}
          className={'map'}
          zoom={14}>
        <Marker
          name={'SOMA'}
          position={{lat: 24.778519, lng: 121.405640}} />
        <Marker
          name={'Dolores park'}
          position={{lat: 24.759703, lng: 130.428093}} />
        <Marker />
      </Map>
      </div>
    );
  }
}

