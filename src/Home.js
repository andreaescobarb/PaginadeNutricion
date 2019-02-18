import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Card1 from './Card1.js';
import Carousel from "./Carousel.js"
import Navbar from "./Navbar.js";

class Home extends Component{
    render(){
        return(
            <div>
                <Navbar/>
                <br/>
                <Carousel/>
                <br/>
                <Card1/>
            </div>
        );
    }
}

export default Home;