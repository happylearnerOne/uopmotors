import React, { Component } from 'react';
import Layout from './Components/Layout';
import ProductLayout from './Components/ProductLayout';
import Company from './Components/Company';
import AboutUs from './Components/AboutUs';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
// import logo from './logo.svg';
// import './App.css';

class App extends Component {

  render() {
    return (


      <Router history={browserHistory}>
        <Route path="/" name="Home" component={Layout}>
          <IndexRoute component={Company}/>
          <Route name="product" path="/product" component={ProductLayout} />
          <Route name="company" path="/company" component={Company} />
          <Route name="aboutus" path="/aboutus" component={AboutUs} />
        </Route>
      </Router>


    );
  }
}

export default App;
