import React from "react";
import {
    Col,
    Button,
    Form,
    FormGroup,
    Label,
    Input,
    FormText,
    Container
} from "reactstrap";
//import NavBar from './NavBar.js';
export default class SignInForm extends React.Component {
    render() {
        return (
            <div>
                <Container style={{ padding: '100px' }}>
                    <Container style={{ background: 'orange' }}>
                        <div style={{ border: 'thin', display: 'flex', justifyContent: 'center' }}>
                            <Form>
                                <br /> <br />
                                <FormGroup row>
                                    <Label for="Nombre" sm={4}>
                                        Nombre
              </Label>
                                    <Col sm={8}>
                                        <Input
                                            type="nombre"
                                            name="nombre"
                                            id="nombre"
                                            placeholder="Ingrese su nombre"
                                        />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="Apellido" sm={4}>
                                        Apellido
              </Label>
                                    <Col sm={8}>
                                        <Input
                                            type="apellido"
                                            name="apellido"
                                            id="apellido"
                                            placeholder="Ingrese su Apellido"
                                        />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="Correo" sm={4}>
                                        Correo
              </Label>
                                    <Col sm={8}>
                                        <Input
                                            type="correo"
                                            name="correo"
                                            id="correo"
                                            placeholder="Ingrese su Correo"
                                        />
                                    </Col>
                                </FormGroup>
                                
                                <br/><br/>
                                <FormGroup check row>
                                    <Col sm={{ size: 10, offset: 0 }}>
                                        <Button color="primary" onClick={Cita}>Confirmar</Button>
                                    </Col>
                                </FormGroup>
                                <br /><br />
                            </Form>
                        </div>
                    </Container>
                </Container>
            </div>
        );
    }
}
function Cita(){
    alert("Sus datos personales han sido registrado con exito!");
  
  }