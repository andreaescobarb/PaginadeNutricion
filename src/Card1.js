
import React from 'react';
import './Card1.css';
import { Container, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';

const Example = (props) => {
  return (
    <Container>
      <Row>
        <Col sm="4">
          <Card body style={{ background: '#64FE2E' }}>
            <CardTitle style={{ color: 'purple', fontSize: '150%' }}>Plan Nutricional</CardTitle>
            <CardText>Incluye comidas de tres tiempos + meriendas y recetas de como preparar los alimentos</CardText>
            <Button>COMPRAR</Button>
          </Card>
        </Col>
        <Col sm="4">
          <Card body style={{ background: '#FF8000' }}>
            <CardTitle style={{ color: 'purple', fontSize: '150%' }}>Fitness Workouts</CardTitle>
            <CardText>Incluye como entrenar en casa + como entrenar cada parte del cuerpo + entrenamientos en gimnasio</CardText>
            <Button>COMPRAR</Button>
          </Card>
        </Col>
        <Col sm="4">
          <Card body style={{ background: '#FFBF00' }}>
            <CardTitle style={{ color: 'purple', fontSize: '150%' }}>Plan Nutricion + Fitness Workouts</CardTitle>
            <CardText>Incluye el plan nutricional + el plan fitness workout + aprender a comer a conciencia</CardText>
            <Button>COMPRAR</Button>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Example;