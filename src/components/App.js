import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Homepage from './Homepage';
import Navigation from './Navigation';
import { Container } from 'react-bootstrap';
import IntroCard from './IntroCard';
import WorkoutBuilder from './WorkoutBuilder';
import Lyricube from './Lyricube';
import Ezgames from './Ez-games';
import WeatherMap from './WeatherMap';
import DailyPlanner from './DailyPlanner';
import Contact from './Contact';

function App() {
  return (
    <Container>
      <Navigation />
      <IntroCard />
      <Container style={{ height: 'calc(100vh - 40px - 16px)' }}>
        <Router>
          <Route exact path='/' render={props => <Homepage />} />
          <Route exact path='/IntroCard' render={props => <IntroCard />} />
          <Route exact path='/workout' render={props => <WorkoutBuilder />} />
          <Route exact path='/lyricube' render={props => <Lyricube />} />
          <Route exact path='/ez-games' render={props => <Ezgames />} />
          <Route exact path='/weatherMap' render={props => <WeatherMap />} />
          <Route exact path='/dailyPlanner' render={props => <DailyPlanner />} />
          <Route exact path='/contact' render={props => <Contact />} />
        </Router>
      </Container>
    </Container>
  );
}

export default App;
