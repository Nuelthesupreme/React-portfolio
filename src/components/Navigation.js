import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

export default function Navigation() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="mb-2">
      <Navbar.Brand href="/">Nuel</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="https://docs.google.com/document/d/1Wmu4P2cTncSo55nTVDnel53hhfU2t_SyRkB9gepZXBI/edit">Resume</Nav.Link>
          <NavDropdown title="projects" id="collasible-nav-dropdown">
            <NavDropdown.Item href="/workout">Workout builder</NavDropdown.Item>
            <NavDropdown.Item href="/lyricube">Lyricube</NavDropdown.Item>
            <NavDropdown.Item href="/Ez-games">Ez-games</NavDropdown.Item>
            <NavDropdown.Item href="/weatherMap">Weather-map</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="">Daily-planner</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          <Nav.Link href="/contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}