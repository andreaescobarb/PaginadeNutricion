import React, { Component } from 'react';
import imgcurriculum from "./cvpic.jpg";
import { Container } from 'reactstrap';
import Navbar from './Navbar.js';

class About extends Component {
    render() {
        return (
            <div className="About">
            <Navbar style={{padding:'100px'}}></Navbar>
                <br/>
                <img src={imgcurriculum} alt="hola" height="550" align="left" style={{padding:'20px'}} />
                <br/>
                <Container style={{backgroundColor:'#FFBF00', width:'400px', padding:'50px'}} >
                <br/>
                <h1>About Me</h1>
                    <h2>Lucía Escobar</h2>
                    <p>Mi nombre es Lucía Escobar, soy licenciada en nutrición y fitness enthusiast.
                        Trabajo en el Programa Mundial de Alimentos (PMA) para ayudar a los niños con 
                        desnutrición. Por placer tengo mi consultorio donde pueden hacer una cita más 
                        personalizada, y pueden contactarme por medio de mi página web o por medio
                        de mis redes sociales.
                        <br/>
                    </p>
                    <br/>
                </Container>
            </div>
        );
    }
}

export default About;