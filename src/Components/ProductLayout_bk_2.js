import React, {Component} from 'react';

// import Productlg from './Productlg.js';
// import Productsm from './Productsm.js';
// import myProd from '../myProd.js';
import { Grid, Row, Col } from 'react-bootstrap';
// import {List, ListItem, makeSelectable} from 'material-ui/List';
// import ActionGrade from 'material-ui/svg-icons/action/grade';
// import ActionFavorite from 'material-ui/svg-icons/action/favorite';
// import ContentInbox from 'material-ui/svg-icons/content/inbox';
// import ContentDrafts from 'material-ui/svg-icons/content/drafts';
// import ContentSend from 'material-ui/svg-icons/content/send';
// import NavigationArrowDropUp from 'material-ui/svg-icons/navigation/arrow-drop-up';
// import ToggleStar from 'material-ui/svg-icons/toggle/star';
// import Subheader from 'material-ui/Subheader';
// import Toggle from 'material-ui/Toggle';
import myProduct from '../data/productTest';

// import {GridList, GridTile} from 'material-ui/GridList';
// import IconButton from 'material-ui/IconButton';
// import Subheader from 'material-ui/Subheader';
// import StarBorder from 'material-ui/svg-icons/toggle/star-border';

import ProductLeftList from './ProductLeftList';
import ProductRightContent from './ProductRightContent';


class ProductLayout extends Component {
	constructor(props){
		super(props);
		console.log("Product init");
		this.state = {
      products: myProduct,
      filterProd: [], 
      open: false
    };
    this.handleToggle = this.handleToggle.bind(this);
    this.handleNestedListToggle = this.handleNestedListToggle.bind(this);
    // this.handleListClick = this.handleListClick.bind(this);
    this.filterProd = this.filterProd.bind(this);
    this.handleListClick = this.handleListClick.bind(this);
	}	

  componentWillMount = () => {
    // console.log("product will mount");

    this.setState({filterProd: this.filterProd('Best-Seller', this.state.products)});
  }
  componentDidMount = () => {
    // console.log("product did mount");
  }

  handleToggle = () => {
    this.setState({
      open: !this.state.open,
    });
  };

  handleNestedListToggle = (item) => {
    this.setState({
      open: item.state.open,
    });
  };

  handleListClick = (event, catalog) => {

    console.log("in handleListClick");
    // console.log(event.target);
    console.log(catalog);
    
    var theFilterProd = this.filterProd(catalog, this.state.products);
    
    if(theFilterProd.length >= 0){
      // console.log("size is greater");
      this.setState({filterProd: theFilterProd});
    }
    // console.log(this.state);
    
  }

  filterProd = (catalog, prods) => {
    let filterResult = [];
    if(catalog === 'Best-Seller'){
      filterResult = prods.filter((prod) => {
        // console.log(prod);
        return prod.bestSellerUS === "Y";
      });
    } else {
      filterResult = prods.filter((prod) => {
        return prod.catalog.indexOf(catalog) !== -1;
      });
    }
    return filterResult;
  }

	render(){		
    return (
      <Grid>
        <Row className="show-grid">
          <Col xs={4} md={3}>
            <ProductLeftList handles={this.handleListClick}/>
          </Col>
          <Col xs={14} md={9}>
            <ProductRightContent data={this.state.filterProd}/>
          </Col>
        </Row>
      </Grid>
    );
	};
}

export default ProductLayout;