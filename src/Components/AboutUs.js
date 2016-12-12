import React, {Component} from 'react';
// import Footer from './Footer.js';
// import {Jumbotron} from 'react-bootstrap';
import {Card, CardHeader, CardTitle, CardText} from 'material-ui/Card';
// import FlatButton from 'material-ui/FlatButton';
import { Grid, Row, Col} from 'react-bootstrap';



class AboutUs extends Component {
	constructor(props){
		super(props);
		console.log("AboutUs init");
	}
	render(){
		return (
			<Grid>
				<Row className="show-grid">
    				<Col xs={12} md={8}>
						<Card >
						    <CardHeader
						      title="關於龍成"
						      subtitle="未來有一天，相信UOP會成為汽機車改裝精品界中一顆最閃亮的星星，我們永遠都會努力向更高的目標挑戰"
						      avatar="images/logo/m03-r.png"
						    />
						    <CardTitle title="VISION 願景" subtitle="" />
						    <CardText>
						    	<ul>	    	
							    	<li>和顧客保持長期良好的關係</li>
						            <li>提供超越期待的服務品質以及價格合理但品質優異的產品</li>
						    	</ul>
						    </CardText>

						    <CardTitle title="MISSION 理念" subtitle="" />
						    <CardText>
						    	<ul>	        
				        			<li>以公司既有的技術優勢，致力於開發及生產多款新穎的汽機車改裝精品，秉持著專業、技術、品質三大經營理念，將台灣精品推向極致</li>
			        			</ul>
						    </CardText>
						    <CardTitle title="VALUE 創業精神" subtitle="" />
						    <CardText>
						    	<ul>	    	
				    				<li>未來有一天，相信UOP會成為汽機車改裝精品界中一顆最閃亮的星星，我們永遠都會努力向更高的目標挑戰</li>
			    				</ul>
						    </CardText>			    
						</Card>
    				</Col>
    				<Col xs={6} md={4}>
    					<Card>
    						<center>
    							<img src="images/logo/uop-about-us.jpg" alt="bear"/>
    						</center> 
    					</Card>
    				</Col>
    			</Row>
			</Grid>
		);
	};
}

export default AboutUs;