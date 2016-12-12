import React, {Component} from 'react';
// import { Carousel }  from 'react-responsive-carousel';
// var Carousel = require('react-responsive-carousel').Carousel;
// general styles
import 'react-responsive-carousel/lib/styles/main.css';

// carousel styles
import 'react-responsive-carousel/lib/styles/carousel.css';

// import { Grid, Row, Col } from 'react-bootstrap';
import RaisedButton from 'material-ui/RaisedButton';


class Company extends Component {
	constructor(props){
		super(props);
		console.log("Company init");
	}

	render(){

		const theWidth = window.screen.width;
		// const theHeight = window.screen.availHeight;
		// const theWidth = document.documentElement.clientWidth;
		const theHeight = document.documentElement.clientHeight;
		const divStyle = {
  			backgroundImage: 'url(images/background-img2.jpg)',
  			width: theWidth,
  			height: theHeight,
			backgroundRepeat: 'no-repeat',
            // backgroundAttachment: 'fixed',
            backgroundPosition: 'center center',	
            overflow: 'hidden',	
            backgroundSize: 'cover'
		};
		
		return (
			<div style={divStyle}>
				<div style={{paddingTop: '45%'}}><center><RaisedButton label="We are not just a seller. We are a real designer and manufacturer." secondary={true} fullWidth={false} /></center></div>
			</div>
		);


	};
}

export default Company;


/*


		{
	    return (
	    	<Grid>
	    		<Row className="show-grid">
	    			<Col xs={18} md={12}>
	    			<Carousel axis="horizontal" interval={2000} autoPlay infiniteLoop width="100%">
		                <div>
		                    <img src="images/carousel/i1.jpg" alt="1"/>
		                    <p className="legend">Legend 1</p>
		                </div>
		                <div>
		                    <img src="images/carousel/i2.jpg"  alt="2" />
		                    <p className="legend">Legend 2</p>
		                </div>
		                <div>
		                    <img src="images/carousel/i3.jpg"  alt="3"/>
		                    <p className="legend">Legend 3</p>
		                </div>
		                 <div>
		                    <img src="images/carousel/i4.jpg"  alt="4"/>
		                    <p className="legend">Legend 3</p>
		                </div>
		                 <div>
		                    <img src="images/carousel/i5.jpg"  alt="5"/>
		                    <p className="legend">Legend 3</p>
		                </div>
	            	</Carousel>
	    			</Col>
	    		</Row>
	    	</Grid>
	    )
		


	render (){
		const theWidth = window.screen.width;
		const theHeight = window.screen.availHeight;
		const divStyle = {
  			backgroundImage: 'url(images/background-img2.jpg)',
  			width: theWidth,
  			height: theHeight,
			backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed',
            backgroundPosition: 'center',
            backgroundSize: 'cover'  			
		};
		
		return (
			<div style={divStyle}>
				<div style={{paddingTop: '40%'}}><center><RaisedButton label="進入網站" secondary={true} fullWidth={false} /></center></div>
			</div>
		);
	}

	*/