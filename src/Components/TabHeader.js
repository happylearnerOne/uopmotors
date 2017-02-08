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
		this.renderContent = this.renderContent.bind(this);
	}

	handleTabChange = (value) => {
		this.setState({
			value: value
		});
	}

	renderContent = () => {
		console.log("in renderContent");
		console.log(this.state.value);
		switch(this.state.value){
			case "Company" : 
				return (<Company />);
			case "AboutUs" : 
				return (<AboutUs />);
			case "Products" : 
				return (<div> product </div>);
			case "ContactUs" : 
				return (<div> contactus </div>);
			default: 
				return <Company />;
		}
	}

	render() {
		var initialCenter = { lng: -90.1056957, lat: 29.9717272 }

		return(
			<Tabs value={this.state.value} onChange={this.handleTabChange}>
				<Tab label="UOP Motors" value="Company">
		            <Company activeTab={this.state.value}/>
				</Tab>
				<Tab label="關於我們&nbsp;About Us" value="AboutUs">
					<AboutUs activeTab={this.state.value}/>
				</Tab>
				<Tab label="產品&nbsp;Products" value="Products">
					<ProductLayoutTab activeTab={this.state.value}/>
				</Tab>
				<Tab label="與我們聯繫&nbsp;Contact Us" value="ContactUs">
					<ContactUs activeTab={this.state.value}/>
				</Tab>								
			</Tabs>
		);
	}
}

export default TabHeader;