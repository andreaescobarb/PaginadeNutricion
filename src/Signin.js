import React from "react";
import {
    Col,
    Button,
    Form,
    FormGroup,
    Container
} from "reactstrap";
import fire from './Fire';
import firebase from "firebase";

const firebaseAuthKey = "firebaseAuthInProgress";

//import NavBar from './NavBar.js';
export default class SignInForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleGoogleLogin = this.handleGoogleLogin.bind(this);
    }
    handleGoogleLogin() {
        let provider = new firebase.auth.GoogleAuthProvider();
        provider.addScope("profile");
        provider.addScope("email");
        fire
            .auth()
            .signInWithPopup(provider)
            .then(result => {
                console.log(result);
            });
    }
    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
        console.log(e.target.value);
    }
    
    render() {
        return (
            <div>
                <Container style={{ padding: '100px' }}>
                    <Container style={{ background: 'orange' }}>
                        <div style={{ border: 'thin', display: 'flex', justifyContent: 'center' }}>
                            <Form>
                                <br /><br />
                                <FormGroup check row>
                                    <Col sm={{ size: 10, offset: 0 }}>
                                        <Button color="primary" onClick={this.handleGoogleLogin}>Iniciar Sesion con Google</Button>
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
function Cita() {
    alert("Sus datos personales han sido registrado con exito!");

}