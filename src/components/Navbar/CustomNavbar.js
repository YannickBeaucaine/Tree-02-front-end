import React, { Component } from 'react';
import NavbarLogo from './t02greensm.png';
import './CustomNavbar.css';
// Bootstrap
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';



export default class CustomNavbar extends Component {
  render() {
    return (
      <div>
        <Navbar collapseOnSelect expand="lg" bg="navbarColor" variant="dark">
          <Container>
            <Navbar.Brand href="#home">
              <img src={NavbarLogo} alt="Tree 02 logo" width="78px" /> </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#features">About</Nav.Link>
                <Nav.Link href="#signup">Signup</Nav.Link>
                <Nav.Link href="#adoptatree">Adopt a tree</Nav.Link>
                <Nav.Link href="#partners">Partners</Nav.Link>

              </Nav>
              <Nav>

                <Navbar.Text>
                  Signed in as: <a href="#login">User</a>
                </Navbar.Text>
                <NavDropdown title="My Account" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">My trees</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Account settings</NavDropdown.Item>
                  {/* <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item> */}
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">Sign out</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>

    )
  }
}
