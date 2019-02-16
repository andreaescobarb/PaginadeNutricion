import React, { Component } from 'react';
import logo from './logo.svg';
import Navbar from "./Navbar.js";
import './App.css';
import Carousel from './Carousel.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar></Navbar>
        <Carousel></Carousel>
      </div>
    );
  }
}

export default App;
