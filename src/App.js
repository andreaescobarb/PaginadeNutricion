import React, { Component } from 'react';
import logo from './logo.svg';
import Navbar from "./Navbar.js";
import './App.css';
import Carousel from './Carousel.js';
import Card1 from './Card1.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar></Navbar>
        <Carousel></Carousel>
        <div className = "text-center">
        <Card1  className = "text-center"></Card1>
        </div>
      </div>
    );
  }
}

export default App;
