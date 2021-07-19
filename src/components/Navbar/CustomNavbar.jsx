import React, { Component } from 'react';
import NavbarLogo from '../images/t02greensm.png';
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
import Home from "../pages/Home";
import About from "../pages/About";
import Signup from "../pages/Signup";
import Adopt from "../pages/Adopt";
import Partners from "../pages/Partners";
import Account from "../pages/Account";
import Mytrees from "../pages/MyTrees";


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
                  {/* wrap with login state to disappear when logged in */}
                  <Nav.Link as={Link} to={"/Signup"}>Signup</Nav.Link>
                  {/* wrap with login state to display when logged in */}
                  <Nav.Link as={Link} to={"/Adopt"}>Adopt a tree</Nav.Link>
                  <Nav.Link as={Link} to={"/Partners"}>Partners</Nav.Link>

                </Nav>
                <Nav>
                  {/* wrap navbar text with logic to show username  */}
                  <Navbar.Text>
                    Signed in as: <a href="#login">User</a>
                  </Navbar.Text>
                  <NavDropdown title="My Account" id="collasible-nav-dropdown">
                    <NavDropdown.Item as={Link} to={"/Mytrees"}>My trees</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to={"/Account"}>Account settings</NavDropdown.Item>
                    {/* <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item> */}
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Sign out</NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
        {/* react router functions   */}
        <div>
          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/signup">
              <Signup />
            </Route>
            <Route path="/adopt">
              <Adopt />
            </Route>
            <Route path="/partners">
              <Partners />
            </Route>
            <Route path="/account">
              <Account />
            </Route>
            <Route path="/mytrees">
              <Mytrees />
            </Route>
          </Switch>
        </div>
      </Router>


    )
  }
}