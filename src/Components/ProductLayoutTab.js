import React, {Component} from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import myProduct from '../data/productTest';
import ProductContent from  './ProductContent';


class ProductLayoutTab extends Component {
	constructor(props){
		super(props);
		console.log("ProductLayoutTab init");
		this.state = {
      products: myProduct
    };
	}	



	render(){	
    let vHeight = window.screen.height;
    const colStyle = {
      paddingTop: (vHeight/30)
    }	
    return (
      <Grid>
        <Row className="show-grid">
          {this.state.products.map((prod, index) => (
            <Col xs={9} md={6} style={colStyle}>
                <ProductContent prod={prod}/>
            </Col>
          ))}
        </Row>
      </Grid>
    );
	};
}

export default ProductLayoutTab;