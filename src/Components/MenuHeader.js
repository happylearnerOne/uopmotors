import React, { Component } from 'react';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import MenuItem from 'material-ui/MenuItem';
// import DropDownMenu from 'material-ui/DropDownMenu';
// import RaisedButton from 'material-ui/RaisedButton';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import { Link } from 'react-router';
import Divider from 'material-ui/Divider';



class MenuHeader extends Component {

	constructor(props){
		super(props);
		console.log(props);
	}
	render() {
		return(
			<Toolbar className="toolbar-text">
				<ToolbarGroup>
					<ToolbarTitle text="UOP Motors" />
					<FontIcon className="muidocs-icon-custom-sort" />
					<ToolbarSeparator />

					<IconMenu
						iconButtonElement={
						<IconButton touch={true}>
							<i className="material-icons">reorder</i>
						</IconButton>
						}
						>
						<MenuItem primaryText="首頁&nbsp;Home" containerElement={<Link to="/" />} />
						<MenuItem primaryText="關於我&nbsp;About Us" containerElement={<Link to="/aboutus" />} />
						<Divider inset={true} />
						<MenuItem primaryText="產品&nbsp;Products" containerElement={<Link to="/productMenu" />} />
						<MenuItem primaryText="&nbsp;&nbsp;新品&nbsp;New" containerElement={<Link to="/new" />} />
						<MenuItem primaryText="&nbsp;&nbsp;摩托車&nbsp;Scootors" containerElement={<Link to="/scootor" />} />
						<MenuItem primaryText="&nbsp;&nbsp;輕檔車&nbsp;LightWeightBike" containerElement={<Link to="/lightWeightBike" />} />
						<MenuItem primaryText="&nbsp;&nbsp;重機&nbsp;Motorcycles" containerElement={<Link to="/motorcycle" />} />
						<MenuItem primaryText="&nbsp;&nbsp;其他&nbsp;Others" containerElement={<Link to="/others" />} />
						<Divider inset={true} />
						<MenuItem primaryText="與我聯繫&nbsp;Contact Us" containerElement={<Link to="/contactus" />} />
					</IconMenu>
				</ToolbarGroup>
			</Toolbar>
		);
	}
}

export default MenuHeader;