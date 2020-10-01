import React from 'react';
import { Card, Button, CardDeck } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function TrainingCard({ variant, title }) {
  return (
    <CardDeck>
      <Card>
        <Card.Img variant="top" src="https://pbs.twimg.com/profile_images/991517440352845824/59tI5gin_400x400.jpg" />
        <Card.Body>
          <Card.Title>Workout builder</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Project</Card.Subtitle>
          <Card.Text>
            The workout builder is an application that allows users to create well made workouts for different types of training in the application.
      </Card.Text>
        </Card.Body>
        <Card.Footer>
          <Button as={Link} to='/workout' variant="dark">view project</Button>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://ccweb.imgix.net/https%3A%2F%2Fccweb.imgix.net%2Fhttps%253A%252F%252Fd3f1iyfxxz8i1e.cloudfront.net%252Fcourses%252Fcourse_image%252F29e28e62affd.jpg%3Fauto%3Dformat%26cs%3Dstrip%26fit%3D%26h%3D710%26ixlib%3Dphp-3.3.0%26w%3D400%26s%3D9b848ac41fa46c1a4b58bd180e6c7cba?auto=format&ixlib=php-3.3.0&s=2c809e0ec154c93b151bea1129d5d2a0" />
        <Card.Body>
          <Card.Title>Ez-games</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Project</Card.Subtitle>
          <Card.Text>
            The ez-games is an app that allows it's users to find games and save it to their library to create a collection of their favorite games.
          </Card.Text>

        </Card.Body>
        <Card.Footer>
          <Button as={Link} to='/Ez-games' variant="dark">view project</Button>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://pbs.twimg.com/profile_images/991517440352845824/59tI5gin_400x400.jpg" />
        <Card.Body>
          <Card.Title>Lyricube</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Project</Card.Subtitle>
          <Card.Text>
            There are many times we have a song in our mind but can only remember a word from it, lyricube is a lyric search engine that allows users to find songs using lyrics.
      </Card.Text>
        </Card.Body>
        <Card.Footer>
          <Button as={Link} to='/lyricube' variant="dark">view project</Button>
        </Card.Footer>
      </Card>
    </CardDeck>
  )
}