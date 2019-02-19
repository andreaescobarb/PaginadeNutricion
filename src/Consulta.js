import React, { Component } from 'react';
import Navbar from './Navbar.js';
import Jumbotron from './Jumbotron';
import Signin from './Signin.js';
import Calendar from './Calendar.js';
import{ Container } from 'reactstrap';

class Consulta extends Component{
    render(){
        return(
            <div className = "Consulta">
                <Navbar style={{padding:'200px'}}></Navbar>
                <Jumbotron></Jumbotron>
                <Container padding='250px'>
                    <Calendar></Calendar>
                    <br/>
                    <Signin></Signin>
                </Container>
            </div>
        );
    }
}

export default Consulta;