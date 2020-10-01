import React from 'react';
import { Card, Button, CardDeck, Container } from 'react-bootstrap';

export default function TrainingCard({ variant, title }) {
  return (
    <Container className="m-3">
      <Card style={{ width: '40rem' }}>
        <Card.Body>
          <Card.Title>Lyricube</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Find my song</Card.Subtitle>
          <Card.Text>
            There are many times we have a song in our mind but can only remember a word from it, lyricube is a lyric search engine that allows users to find songs using lyrics.
    </Card.Text>
          <Button href="https://github.com/Nuelthesupreme/lyricworks" variant="dark">view Github</Button>
        </Card.Body>
      </Card>
    </Container>
  )
}