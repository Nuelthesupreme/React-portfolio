import React from 'react';
import { Card, Button, Container } from 'react-bootstrap';


export default function TrainingCard({ variant, title }) {
  return (
    <Container className="m-3">
      <Card style={{ width: '40rem' }}>
        <Card.Body>
          <Card.Title>Ez-games</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">find my games</Card.Subtitle>
          <Card.Text>
            The ez-games is an app that allows it's users to find games and save it to their library to create a collection of their favorite games.
    </Card.Text>
          <Button href="https://github.com/Nuelthesupreme/project-2" variant="dark">view Github</Button>
        </Card.Body>
      </Card>
    </Container>
  )
}