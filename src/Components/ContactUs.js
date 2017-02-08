import React, {Component} from 'react';
// import ReactDOM from 'react-dom';
import {Gmaps, Marker, InfoWindow, Circle} from 'react-gmaps';
import { Grid, Row, Col, FormGroup, FormControl, Button, Glyphicon, InputGroup } from 'react-bootstrap';
import Divider from 'material-ui/Divider';
import * as SendMailApi from '../api/sendMail';



class ContactUs extends Component {
  constructor(props){
    super(props);
    console.log("contactus init");
    this.state = {
      name: "",
      mailto: "",
      subject: "",
      content: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFormChange = this.handleFormChange.bind(this);
  }
  onMapCreated(map){
    map.setOptions({
      disableDefaultUI: true
    });
  }
  onDragEnd(e) {
    console.log('onDragEnd', e);
  }
  onCloseClick() {
    console.log('onCloseClick');
  }
  onClick(e) {
    console.log('onClick', e);
  }
  handleSubmit(e){
    e.preventDefault();
    console.log("handleSubmit");
    SendMailApi.sendMail(this.state).then(function(response){
      console.log("submit response");
      console.log(response);
    });
    

  }
  handleFormChange(e, itemName){
    console.log("handleFormChange");
    // console.log(this.state);
    switch(itemName){
      case 'fullName':
        return this.setState({name: e.target.value});
      case 'email':
        return this.setState({mailto: e.target.value});
      case 'subject':
        return this.setState({subject: e.target.value});
      case 'message':
        return this.setState({content: e.target.value});
      default:
        return false;
    }
  }


  render(){
    const coords = {
      lat: 24.943739,
      lng: 121.3928103
    };

    const mapStyle = {
      width: '80%',
      height: '300px'
    }
    if(this.props.activeTab === "ContactUs"){
      return(
        <div>
          <center>
            <Gmaps
              width={mapStyle.width}
              height={mapStyle.height}
              lat={coords.lat}
              lng={coords.lng}
              zoom={12}
              loadingMessage={'Loading google map now'}
              params={{v: '3.exp', key: 'AIzaSyA0QyCpYLYV8okMd6M5DUWtiAvExGAj4QQ'}}
              onMapCreated={this.onMapCreated}>
              <Marker
                lat={coords.lat}
                lng={coords.lng}
                draggable={true}
                onDragEnd={this.onDragEnd} />
              <InfoWindow
                lat={coords.lat}
                lng={coords.lng}
                content={'龍成'}
                onCloseClick={this.onCloseClick} />
              <Circle
                lat={coords.lat}
                lng={coords.lng}
                radius={100}
                onClick={this.onClick} />
            </Gmaps>
          </center>
          <div>
          <Grid>
            <Row>
              <Col xs={18} md={12}>
                <hr/>
              </Col>
            </Row>
            <Row>
              <Col xs={9} md={6}>
                <Row>
                  <Col xs={18} md={12}>
                    <h4>HOW TO CONTACT US</h4>
                    <p>Please feel free to contacr us by Email, or leave your message if you have any question.</p>
                    <p>It is always our great pleasure to serve you anytime!</p>
                  </Col>
                </Row>
                <Row>
                  <Col xs={18} md={12}>
                    <h4>OFFICE</h4>
                    <p>No.68-23, Aly.254, Ln.222, Sanshu Rd.,Sanxia Dist, New Taipei City 237, Taiwan(R.O.C.)</p>  
                  </Col>
                </Row>
                <Row>
                  <Col xs={18} md={12}>
                    <h4>CONTACT INFO</h4>
                    <p>Tel: +886-2-26718169</p>
                    <p>Fax: +886-2-26728519</p>
                    <p>Email: <a href="maito:uop168@gmail.com">uop168@gmail.com</a></p>
                  </Col>
                </Row>
              </Col>
              <Col xs={9} md={6}>
                <h4>LEAVE YOUR MESSAGE</h4>
                {/*<form role="form" novalidate name="emailForm">*/}
                <form onSubmit={this.handleSubmit}>
                  <FormGroup>
                    <InputGroup>
                      <InputGroup.Addon>
                        <Glyphicon glyph="user" />
                      </InputGroup.Addon>
                      <FormControl type="text" value={this.state.name} placeholder="Your name" onChange={(event, itemName) => this.handleFormChange(event, 'fullName')}/>
                    </InputGroup>
                  </FormGroup>
                  <FormGroup>
                    <InputGroup>
                      <InputGroup.Addon>
                        <Glyphicon glyph="envelope" />
                      </InputGroup.Addon>
                      <FormControl type="text" value={this.state.mailto} placeholder="Your email" onChange={(event, itemName) => this.handleFormChange(event, 'email')}/>
                    </InputGroup>
                  </FormGroup>
                  <FormGroup>
                    <InputGroup>
                      <InputGroup.Addon>
                        <Glyphicon glyph="pencil" />
                      </InputGroup.Addon>
                      <FormControl type="text" value={this.state.subject} placeholder="Subjects" onChange={(event, itemName) => this.handleFormChange(event, 'subject')}/>
                    </InputGroup>
                  </FormGroup>
                  <FormGroup>
                    <InputGroup>
                      <InputGroup.Addon>
                        <Glyphicon glyph="edit" />
                      </InputGroup.Addon>
                      <FormControl componentClass="textarea" value={this.state.content} placeholder="Your message" style={{height:'150px'}} onChange={(event, itemName) => this.handleFormChange(event, 'message')}/>
                    </InputGroup>
                  </FormGroup>
                  <Button type="submit">Submit</Button>
                    {/*
                    <div class="form-group"> 
                        <button class="btn btn-default" ng-click="sendMail()">Send</button>
                    </div>    
                  */}
                </form>
              </Col>
            </Row>
          </Grid>
          </div>
        </div>
      );
    } else {
      return (<div>&nbsp;</div>);
    }
  };

}

export default ContactUs;


