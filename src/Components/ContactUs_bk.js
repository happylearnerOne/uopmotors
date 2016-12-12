import React, {Component} from 'react';
import shouldPureComponentUpdate from 'react-pure-render/function';
 
import GoogleMap from 'google-map-react';
import MyGreatPlace from './MyGreatPlace';
import { Grid, Row, Col } from 'react-bootstrap';

 
export default class ContactUs extends Component {
  static defaultProps = {
    apikey: 'AIzaSyA0QyCpYLYV8okMd6M5DUWtiAvExGAj4QQ', 
    center: {lat: 59.938043, lng: 30.337157},
    zoom: 9,
    greatPlaceCoords: {lat: 59.724465, lng: 30.080121}
  };
 
  shouldComponentUpdate = shouldPureComponentUpdate;
 
  constructor(props) {
    super(props);
    console.log("ContactUs init");
  }
 
  render() {
    
    const theStyle = {
      height: '300px',
      //width: window.screen.width

    }
    
    return (
            <div style={theStyle}>
       <GoogleMap 
        bootstrapURLKeys={{key: this.props.apikey}} 
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}>
        <MyGreatPlace lat={59.955413} lng={30.337844} text={'Here'}  />
        <MyGreatPlace {...this.props.greatPlaceCoords} text={'B'}  />
      </GoogleMap>     
            </div>   
    );
  }
}