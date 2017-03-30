import React, {Component} from 'react';
// import { Carousel }  from 'react-responsive-carousel';
// var Carousel = require('react-responsive-carousel').Carousel;
// general styles
import 'react-responsive-carousel/lib/styles/main.css';

// carousel styles
import 'react-responsive-carousel/lib/styles/carousel.css';

// import { Grid, Row, Col } from 'react-bootstrap';
import RaisedButton from 'material-ui/RaisedButton';
import '../App.css';


class Company extends Component {
	constructor(props){
		super(props);
		console.log("Company init");
	}

	render(){
		console.log(this.props.activeTab);
		let theWidth = window.screen.width;
		// const theHeight = window.screen.availHeight;
		// const theWidth = document.documentElement.clientWidth;
		let theHeight = document.documentElement.clientHeight;
		const divStyle = {
  			backgroundImage: (theWidth >= 768 ? 'url(images/background-img10.jpg)' : 'url(images/background-img10-s.jpg)'),
  			width: '100%',
  			height: theHeight,
			backgroundRepeat: 'no-repeat',
            // backgroundAttachment: 'fixed',
            backgroundPosition: 'center center',	
            overflow: 'hidden',	
            backgroundSize: 'cover'
		};



		// if(this.props.activeTab === "Company"){
			/*
			return (
				<div style={divStyle}>
					<div style={{paddingTop: '45%'}}></div>
				</div>
			);
			*/
			return (
<div style={divStyle}>		
<div className="wrapper" onclick="">
    <div className="page">
        <div className="imageMap" aria-haspopup="true">
            <div className="hotspots">
                <div><a href="http://www.google.com.tw/" className="p1" rel="nofollow" title="Google" target="_blank"></a>
                </div>
                <div><a href="http://tw.yahoo.com/" className="p2" rel="nofollow" title="Yahoo" target="_blank"></a>
                </div>
                <div><a href="http://www.pchome.com.tw/" className="p3" rel="nofollow" title="Pchome" target="_blank"></a>
                </div>
                <div><a href="http://www.hncb.com.tw/" className="p4" rel="nofollow" title="華南銀行" target="_blank"></a>
                </div>
                <div><a href="http://edition.cnn.com/" className="p5" rel="nofollow" title="CNN" target="_blank"></a>
                </div>
                <div><a href="http://www.bbc.co.uk/news" className="p6" rel="nofollow" title="BBC" target="_blank"></a>
                </div>

             </div>
         </div>
    </div>
</div>
</div>				
			);


		// } else {
			// return (<div>&nbsp;</div>);
		// }

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