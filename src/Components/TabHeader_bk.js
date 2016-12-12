import React, { Component } from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import Company from './Company';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import Product from './Product';
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

		return(
			<Tabs value={this.state.value} onChange={this.handleTabChange}>
				<Tab label="龍成精密有限公司" value="Company">
		            {this.state.value === "Company" ? <Company /> : null}
				</Tab>
				<Tab label="About Us" value="AboutUs">
					{this.state.value === "AboutUs" ? <AboutUs /> : null}
				</Tab>
				<Tab label="Products" value="Products">
					{this.state.value === "Products" ? <Product /> : null}
				</Tab>
				<Tab label="Contact Us" value="ContactUs">
					<ContactUs/>
				</Tab>								
			</Tabs>
		);
	}
}

export default TabHeader;