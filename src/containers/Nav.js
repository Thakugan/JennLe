import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

const navbarInstance = (
  <Navbar className="jenn-nav">
    <Navbar.Header>
      <Navbar.Brand>
        <a>Jenn Le</a>
      </Navbar.Brand>
    </Navbar.Header>
    <Nav>
      <NavItem eventKey={1}>about</NavItem>
      <NavItem eventKey={2}>projects</NavItem>
      <NavItem eventKey={3}>misc</NavItem>
    </Nav>
  </Navbar>
);

class NavbarInstance extends Component {
  render() {
    return navbarInstance;
  }
}

export default NavbarInstance;
