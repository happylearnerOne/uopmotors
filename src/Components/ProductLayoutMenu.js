import React, {Component} from 'react';
import ProductContent from './ProductContent';
import myProduct from '../data/productData';

class ProductLayoutMenu extends Component {

	constructor(props){
		super(props);
		console.log("ProductLayoutMenu init");
		console.log(props);
		this.state = {
      		products: myProduct,
      		displayProd: myProduct
    	};
    	this.filterProd = this.filterProd.bind(this);
	}

	filterProd = (catalog, prods) => {
		console.log("in filter");
		let filterResult = [];

		filterResult = prods.filter((prod) => {
		  return prod.classfied.indexOf(catalog) !== -1;
		});
		return filterResult;
	}

	componentWillReceiveProps = (nextProps) => {
		// console.log("receive");
		// console.log(nextProps);
		let displayProd = this.state.displayProd;
		switch(this.props.location.pathname){
			case "/new":
				displayProd = this.filterProd("New", this.state.products);
				break;
			case "/lightWeightBike":
				displayProd = this.filterProd("LightWeightBike", this.state.products);
				break;
			case "/scootor":
				displayProd = this.filterProd("Scooter", this.state.products);
				break;
			case "/motorcycle":
				displayProd = this.filterProd("Motorcycle", this.state.products);
				break;
			case "/others":
				displayProd = this.filterProd("Others", this.state.products);
				break;
			default:
				displayProd = this.state.products;
				break;
		}
		this.setState({displayProd: displayProd});		
	}


	render(){
		//const displayProd = this.getDisplayProd(this.props.location.pathname, this.state.products);
		return (
			<div>
			{this.state.displayProd.map((prod, index) => (
                <ProductContent prod={prod} srcType="Menu"/>
            ))}
            </div>
		);
	};
}

export default ProductLayoutMenu;