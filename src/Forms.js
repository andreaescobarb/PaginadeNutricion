import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Container } from 'reactstrap';
import NavBar from './Navbar';
import icon1 from "./paypal.jpg";


export default class Example extends React.Component {
    render() {
        return (
            <div>

                <NavBar></NavBar>
                <br/>

                <Container style={{backgroundColor:'#FFBF00', width:'500px', padding:'10px'}} >
                <img src={icon1}/>
                    <Form inline>
                        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                            <Label for="creditcard" className="mr-sm-2">Ingrese Tarjeta de Crédito</Label>
                            <Input type="creditcard" name="creditcard" id="creditcard" placeholder="xxxx-xxxx-xxxx-####"/>
                        </FormGroup>
                        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                            <Label for="Nombre de Propietario" className="mr-sm-2">Nombre de Propietario</Label>
                            <Input type="Nombre de Propietario" name="Nombre de Propietario" id="Nombre de Propietario" placeholder="Nombre Apellido"/>
                        </FormGroup>
                        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                            <Label for="examplePassword" className="mr-sm-2">Password</Label>
                            <Input type="password" name="password" id="examplePassword" placeholder="don't tell!" />
                        </FormGroup>
                        <Button style = {{color: "light"}} onClick = {Compra()} >Submit</Button>
                    </Form>
                </Container>
            </div>
        );
    }
}

function Compra(){
    alert("Su compra fue realizada con exito!");
  
  }