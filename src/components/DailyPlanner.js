import React from 'react';
import { Card, Button, Container } from 'react-bootstrap';


export default function TrainingCard({ variant, title }) {
  return (
    <Container className="m-3">
      <Card style={{ width: '40rem' }}>
        <Card.Body>
          <Card.Title>Daily planner</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Today's plan</Card.Subtitle>
          <Card.Text>
            The daily planner app allows users to plan an keep track on their daily activities by using colour codes to represent past, current and future times.
    </Card.Text>
          <Button href="https://github.com/Nuelthesupreme/hw-daily-planner" variant="dark">view Github</Button>
        </Card.Body>
      </Card>
    </Container>
  )
}