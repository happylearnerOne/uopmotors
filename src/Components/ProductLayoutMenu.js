import React, {Component} from 'react';
import ProductContent from './ProductContent';
import myProduct from '../data/productTest';

class ProductLayoutMenu extends Component {

	constructor(props){
		super(props);
		console.log("ProductLayoutMenu init");
		this.state = {
      		products: myProduct
    	};
	}

	render(){
		return (
			<div>
			{this.state.products.map((prod, index) => (
                <ProductContent prod={prod}/>
            ))}
            </div>
		);
	};
}

export default ProductLayoutMenu;