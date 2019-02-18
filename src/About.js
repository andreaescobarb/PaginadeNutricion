import React, { Component } from 'react';
import imgcurriculum from "./cvpic.jpg";
import { Container } from 'reactstrap';
import Navbar from './Navbar.js';

class About extends Component {
    render() {
        return (
            <div className="About" >
            <Navbar style={{padding:'200px'}}></Navbar>
                <img src={imgcurriculum} alt="hola" height="500" align="left" />
                <Container style={{backgroundColor:'#FFBF00', width:'700px'}} >
                <br/>
                <h1>About Me</h1>
                    <h2>Lucía Escobar</h2>
                    <p>Mi nombre es Lucía Escobar, soy licenciada en nutrición y fitness enthusiast.
                        Trabajo en el Programa Mundial de Alimentos (PMA) para ayudar a los niños con 
                        desnutrición. Por placer tengo mi consultorio donde pueden hacer una cita más 
                        personalizada, donde pueden contactarme por medio de mi página web o por medio
                        de mis redes sociales
                        <br/>

                    </p>
                    <br/>
                </Container>
            </div>
        );
    }
}

export default About;