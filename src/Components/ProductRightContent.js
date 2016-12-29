import React, {Component} from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import Subheader from 'material-ui/Subheader';
// import IconButton from 'material-ui/IconButton';
// import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import { Grid, Row, Col, Image } from 'react-bootstrap';


class ProductRightContent extends Component {

	constructor(props){
		super(props);
		console.log("ProductRightContent init");
		this.state = {
        	width: window.screen.width, 
        	height: window.screen.height 
      	}
	}
	render(){
	    const styles = {
	      root: {
	        display: 'flex',
	        flexWrap: 'wrap',
	        justifyContent: 'space-around',
	      },
	      gridList: {
	        // width: 600,
	        // height: 450,
	        overflowY: 'auto',
	      },
	    };

	    const GridStyle = {
	    	display: 'flex',
	    	flexWrap: 'wrap',
	    	margin: '-2px',
	    	overflowY: 'auto'
	    }
	    let vHeight = window.screen.height;

		return (

			<Grid style={{width:'100%', paddingTop:(vHeight/20)}}>
				<Row style={GridStyle}>
				{this.props.data.map((prod, index) => (



<Card>
   
    <CardMedia
      overlay={<CardTitle title={prod.name} subtitle={prod.name_ch} />}
    >
      <Image src={prod.imageDirectory + prod.productRelativeImageUrl[0].imageUrl} alt={prod.name} responsive />
    </CardMedia>
    <CardTitle title="Product price: 100.99 (USD), 3000 (NTD) " subtitle="Shipping fee is not included." />
    {/*
    <CardText>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
      Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
      Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
    </CardText>
    <CardActions>
      <FlatButton label="Action1" />
      <FlatButton label="Action2" />
    </CardActions>
*/}
  </Card>



                ))}
                </Row>


					{/*
                	<Col xs={9} md={6}>
                		<Image src={prod.imageDirectory + prod.productRelativeImageUrl[0].imageUrl} alt={prod.name} responsive /><br/>
                		Price: 100.99 (USD), 3000 (NTD)
                	</Col>
                	*/} 

			</Grid>
		);
	};
}
export default ProductRightContent;