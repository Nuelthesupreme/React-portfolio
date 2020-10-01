import React from 'react';
import { Card, Container, ListGroupItem, ListGroup, Button } from 'react-bootstrap';


export default function TrainingCard({ variant, title }) {
  return (
    <Container className="m-3">
      <Card style={{ width: '18rem' }}>

        <Card.Body>
          <Card.Title>Contacts</Card.Title>
          <Card.Text>
            Below are my contact details and how you can get in touch with me.
    </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>Linkedin</ListGroupItem>
          <ListGroupItem>GitHub </ListGroupItem>
          <ListGroupItem>Emmanuelakinwale64@mail.com</ListGroupItem>
        </ListGroup>
        <Card.Body>
          <Button href="https://www.linkedin.com/in/nuelthesupreme" variant="dark">Linkedin</Button>
          <Button className="ml-2" href="https://github.com/Nuelthesupreme" variant="dark">Github</Button>
        </Card.Body>
      </Card>
    </Container>
  )
}