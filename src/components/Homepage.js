import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Cards } from './resuable';


export default function Homepage() {
  return (
    <Container className="p-4">
      <Cards />
    </Container>
  )
}