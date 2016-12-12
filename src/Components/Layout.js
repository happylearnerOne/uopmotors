import React, {Component} from 'react';
import TabHeader from './TabHeader';
import MenuHeader from './MenuHeader';
// import Menu from './Menu.js';
// import Content from './Content.js';
// import Footer from './Footer.js';
// import {Navbar, Nav, NavItem} from 'react-bootstrap';

class Layout extends Component {
    constructor(props){
      super(props);
      this.state = {
        width: window.screen.width, 
        height: window.screen.height 
      }
      this.updateDimensions = this.updateDimensions.bind(this);
    }

    updateDimensions() {
        this.setState({width: window.screen.width, height: window.screen.height});
    }
    componentWillMount() {
        this.updateDimensions();
    }
    componentDidMount() {
        window.addEventListener("resize", this.updateDimensions);
    }

	render(){
		if(this.state.width >= 768){
			return (
				<div>
					<TabHeader />
					{/*<Footer />*/}
				</div>
			)
		} else {
			return (
				<div>
					<MenuHeader/>
					{this.props.children}
				</div>
			);
		}					
	};
}

export default Layout;