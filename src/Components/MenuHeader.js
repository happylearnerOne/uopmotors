import React, { Component } from 'react';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import MenuItem from 'material-ui/MenuItem';
// import DropDownMenu from 'material-ui/DropDownMenu';
// import RaisedButton from 'material-ui/RaisedButton';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import { Link } from 'react-router';


class MenuHeader extends Component {

	constructor(props){
		super(props);
		console.log(props);
	}
	render() {
		return(
			<Toolbar className="toolbar-text">
				<ToolbarGroup>
					<ToolbarTitle text="龍成精密有限公司" />
					<FontIcon className="muidocs-icon-custom-sort" />
					<ToolbarSeparator />

					<IconMenu
						iconButtonElement={
						<IconButton touch={true}>
							<i className="material-icons">reorder</i>
						</IconButton>
						}
						>
						<MenuItem primaryText="About Us" containerElement={<Link to="/aboutus" />} />
						<MenuItem primaryText="Products" containerElement={<Link to="/productMenu" />} />
						{/*<MenuItem primaryText="Contact Us" containerElement={<Link to="/contactus" />} />*/}
					</IconMenu>
				</ToolbarGroup>
			</Toolbar>
		);
	}
}

export default MenuHeader;