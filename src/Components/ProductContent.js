import React, {Component} from 'react';
import {Card, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import { Image } from 'react-bootstrap';


class ProductContent extends Component {

	constructor(props){
		super(props);
		console.log("ProductContent init");
		// console.log(props);
	}

	render(){
		const {prod} = this.props;
		// console.log("in product content render");
		// console.log(prod);
		let vHeight = window.screen.height;
		let vWidth = window.screen.width;

		// console.log(vHeight);
		const cardStyle = {
			paddingTop: (vHeight/30),
			paddingRight: (vWidth/30),
			paddingLeft: (vWidth/30),
			height: '650px'
		}
		return (
			<Card style={cardStyle}>
				<CardMedia>
					<Image src={prod.imageDirectory + prod.productRelativeImageUrl[0].imageUrl} alt={prod.name} responsive />
    			</CardMedia>
    			<CardTitle title={prod.name} subtitle={prod.name_ch} />
			    <CardText>
			    	Product price: 100.99 (USD), 3000 (NTD) <br/>
			    	Shipping fee is not included.
			    </CardText>   
  			</Card>
		);
	};
}

export default ProductContent;