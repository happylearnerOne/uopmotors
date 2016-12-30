import React, { Component } from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import Company from './Company';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
// import ProductLayout from './ProductLayout';
// import ProductLayoutMenu from './ProductLayoutMenu';
import ProductLayoutTab from './ProductLayoutTab';

// import {GridList, GridTile} from 'material-ui/GridList';
// import IconButton from 'material-ui/IconButton';
// import StarBorder from 'material-ui/svg-icons/toggle/star-border';


class TabHeader extends Component {

	constructor(props){
		super(props);
		console.log(props);
		this.state = {
			value: "Company"
		}
		this.handleTabChange = this.handleTabChange.bind(this);
	}

	handleTabChange = (value) => {
		this.setState({
			value: value
		});
	}

	render() {
		var initialCenter = { lng: -90.1056957, lat: 29.9717272 }

		return(
			<Tabs value={this.state.value} onChange={this.handleTabChange}>
				<Tab label="龍成精密有限公司" value="Company">
		            <Company />
				</Tab>
				<Tab label="About Us" value="AboutUs">
					<AboutUs />
				</Tab>
				<Tab label="Products" value="Products">
					<ProductLayoutTab />
				</Tab>
				<Tab label="Contact Us" value="ContactUs">
					<ContactUs/>
				</Tab>								
			</Tabs>
		);
	}
}

export default TabHeader;