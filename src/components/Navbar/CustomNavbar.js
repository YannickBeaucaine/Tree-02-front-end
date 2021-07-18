import React, { Component } from 'react';
import NavbarLogo from '../Images/t02greensm.png';
import './CustomNavbar.css';
// Bootstrap
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
// React Router
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from "../pages/About";


export default class CustomNavbar extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar collapseOnSelect expand="lg" bg="navbarColor" variant="dark">
            <Container>
              <Navbar.Brand as={Link} to={"/Home"}>
                <img src={NavbarLogo} alt="Tree 02 logo" width="78px" /> </Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link as={Link} to={"/About"}>About</Nav.Link>
                  <Nav.Link as={Link} to={"/Signup"}>Signup</Nav.Link>
                  <Nav.Link as={Link} to={"/Adopt"}>Adopt a tree</Nav.Link>
                  <Nav.Link as={Link} to={"/Partners"}>Partners</Nav.Link>

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
        <div>
          <Switch>
            <Route path="/about">
              <About />
            </Route>
          </Switch>
        </div>
      </Router>


    )
  }
}
