import React from 'react';
import { Jumbotron, Button, Container } from 'reactstrap';

const Example = (props) => {
    return (
        <div>
            //<Container style={{padding:'50px'}}>
                <Container>
                    <Jumbotron style={{ backgroundColor: 'orange' }}>
                        <h1 className="display-3" style={{ color: 'black', fontFamily: 'times bold' }} >HAZ UNA CITA</h1>
                        <p className="lead">Estamos ubicados 2 nivel del Gimnasio El Gato, colonia Palmira, Tegucigalpa Honduras.</p>
                        <hr className="my-2" />
                        <p>De 5pm - 8pm de lunes a jueves. Viernes y sabados todo el dia, para una dieta personalizada, mido tu masa corporal,
                            tu grasa corporal, y estoy especializada en dietas para personas con problemas de salud tales como diabetes,
                            hipertension, insuficiencia renal y muchas mas.
                     </p>
                        <p className="lead">
                            <Button color="primary" onClick={Agendar}>Agendar </Button>
                        </p>
                    </Jumbotron>
                </Container>
            </Container>
        </div>
    );
};

export default Example;

function Agendar(){
    alert("Se ha agendado su cita!");
  
  }