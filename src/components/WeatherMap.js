import React from 'react';
import { Card, Button, Container } from 'react-bootstrap';


export default function TrainingCard({ variant, title }) {
  return (
    <Container className="m-3">
      <Card style={{ width: '40rem' }}>
        <Card.Body>
          <Card.Title>Weather map</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Today's weather</Card.Subtitle>
          <Card.Text>
            The weather map is an app that allows users to search and find the weather from different location in the world.
    </Card.Text>
          <Button href="https://github.com/Nuelthesupreme/weather-map" variant="dark">view Github</Button>
        </Card.Body>
      </Card>
    </Container>
  )
}