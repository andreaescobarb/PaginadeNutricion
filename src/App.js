import React, { Component } from 'react';
import logo from './logo.svg';
import Navbar from "./Navbar.js";
import './App.css';
import Carousel from './Carousel.js';
import Card1 from './Card1.js';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import PropTypes from "prop-types";
import Content from './Content';

class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired
  };
  render() {
    const{children}=this.props;
    return (
      <div className="App">
        <Content body={children}/>
      </div>
    );
  }
}

export default App;
