import React from 'react';
import { Card } from 'react-bootstrap';

export default function IntroCard() {
  return (
    <Card className="text-white" >
      <Card.Img src="https://png.pngtree.com/thumb_back/fh260/background/20190221/ourmid/pngtree-texture-geometric-black-metal-gradient-image_17809.jpg" alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title className='text-center d-flex flex-column'><h3>I AM EMMANUEL AKINWALE</h3></Card.Title>
        <Card.Text className='text-center d-flex flex-column'>
          I'm a full-stack developer that is specializing in the MERN stack. I like to develop various parts of both the front and
          back-end as well as learn about new technologies and how to best implement them in my free time.
        </Card.Text>
      </Card.ImgOverlay>
    </Card>
  )
}

