import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import Layout from './Components/Layout';
// import Home from './Component/Home.js';
import Company from './Components/Company';
import Product from './Components/Product';
import AboutUs from './Components/AboutUs';
import ContactUs from './Components/ContactUs';
import ProductLayoutMenu from './Components/ProductLayoutMenu';
// import Footer from './Component/Footer.js';

class Router extends Component {

  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" name="Home" component={Layout}>
          <IndexRoute component={Company}/>
          <Route name="product" path="/product" component={ProductLayoutMenu} />
          <Route name="company" path="/company" component={Company} />
          <Route name="aboutus" path="/aboutus" component={AboutUs} />
          <Route name="contactus" path="/contactus" component={ContactUs} />
        </Route>
      </Router>
    )
  }
}

export default Router;
