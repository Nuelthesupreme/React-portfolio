import React from 'react';
import { Card, Button, Container } from 'react-bootstrap';


export default function TrainingCard({ variant, title }) {
  return (
    <Container className="m-3">
      <Card style={{ width: '40rem' }}>
        <Card.Body>
          <Card.Title>Workout Builder</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Master workout builder</Card.Subtitle>
          <Card.Text>
            The workout builder is an application that allows users to create well made workouts for different types of training in the application.
    </Card.Text>
          <Button href="https://github.com/Nuelthesupreme/workout-builder-client" variant="dark">view Github</Button>
        </Card.Body>
      </Card>
    </Container>
  )
}