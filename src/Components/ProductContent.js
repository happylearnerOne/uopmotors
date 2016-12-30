import React, {Component} from 'react';
import {Card, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import { Image } from 'react-bootstrap';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';


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
			    	售價/批發價(Retail/Wholesale price), 台幣計價(NTD): <br/>
			    	<Table selectable={false}>
			    		<TableHeader displaySelectAll={false} adjustForCheckbox={false}>
				    		<TableRow>
				    			<TableHeaderColumn style={{paddingLeft:'6px', paddingRight:'6px'}}>購買數量<br/>(MPQ.)<br/>組/Set</TableHeaderColumn>
				    			<TableHeaderColumn style={{paddingLeft:'6px', paddingRight:'6px'}}>{prod.price[0].qty}</TableHeaderColumn>
				    			<TableHeaderColumn style={{paddingLeft:'6px', paddingRight:'6px'}}>{prod.price[1].qty}</TableHeaderColumn>
				    			<TableHeaderColumn style={{paddingLeft:'6px', paddingRight:'6px'}}>{prod.price[2].qty}</TableHeaderColumn>
				    			<TableHeaderColumn style={{paddingLeft:'6px', paddingRight:'6px'}}>{prod.price[3].qty}</TableHeaderColumn>
				    			<TableHeaderColumn style={{paddingLeft:'6px', paddingRight:'6px'}}>{prod.price[4].qty}</TableHeaderColumn>
				    		</TableRow>
			    		</TableHeader>
			    		<TableBody displayRowCheckbox={false} >
			    			<TableRow>
			    				<TableRowColumn style={{paddingLeft:'6px', paddingRight:'6px'}}>單價<br/>(U/P)</TableRowColumn>
			    				<TableRowColumn style={{paddingLeft:'6px', paddingRight:'6px'}}>{prod.price[0].unitPrice}</TableRowColumn>
			    				<TableRowColumn style={{paddingLeft:'6px', paddingRight:'6px'}}>{prod.price[1].unitPrice}</TableRowColumn>
			    				<TableRowColumn style={{paddingLeft:'6px', paddingRight:'6px'}}>{prod.price[2].unitPrice}</TableRowColumn>
			    				<TableRowColumn style={{paddingLeft:'6px', paddingRight:'6px'}}>{prod.price[3].unitPrice}</TableRowColumn>
			    				<TableRowColumn style={{paddingLeft:'6px', paddingRight:'6px'}}>{prod.price[4].unitPrice}</TableRowColumn>
			    			</TableRow>
			    		</TableBody>
			    	</Table>
			    	Shipping fee is not included.
			    </CardText>   
  			</Card>
		);
	};
}

export default ProductContent;