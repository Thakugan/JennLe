import React, { Component } from 'react';
import { Navbar, Nav, NavItem, MenuItem, NavDropdown } from 'react-bootstrap';

const navbarInstance = (
  <Navbar className="jenn-nav">
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#">Jenn Le</a>
      </Navbar.Brand>
    </Navbar.Header>
    <Nav>
      <NavItem eventKey={1} href="#">about</NavItem>
      <NavItem eventKey={2} href="#">projects</NavItem>
      <NavItem eventKey={3} href="#">misc</NavItem>
    </Nav>
  </Navbar>
);

class NavbarInstance extends Component {
  render() {
    return navbarInstance;
  }
}

export default NavbarInstance;
