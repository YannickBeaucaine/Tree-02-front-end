import React, {useContext} from 'react';
import NavbarLogo from '../Images/t02greensm.png';
import './CustomNavbar.css';
import { AuthContext } from '../context/AuthProvider'
// Bootstrap
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
// React Router
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Signup from "../pages/Signup";
import Adopt from "../pages/Adopt";
import Partners from "../pages/Partners";
import Account from "../pages/Account";
import Mytrees from "../pages/MyTrees";
import Mystore from "../pages/MyStore";
import SuccessPage from "../pages/Success";

export default function CustomNavbar(props) {
 
  
  const [auth, setAuth] = useContext(AuthContext);


  const SignOut = () =>{

    sessionStorage.clear();
    setAuth({
      loggedIn: false,
      name: null,
      email: null,
      token: null
    });
    console.log('redirect')
  }

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
                  {auth.loggedIn && (
                    <>
                    <Nav.Link as={Link} to={"/Adopt"}>Adopt a tree</Nav.Link>
                    <Nav.Link as={Link} to={"/MyTrees"}>My Trees</Nav.Link>
                    </>
                  )}
                  <Nav.Link as={Link} to={"/Partners"}>Partners</Nav.Link>
                  <Nav.Link as={Link} to={"/About"}>About</Nav.Link>
                </Nav>
                <Nav>
                  {!auth.loggedIn && (
                    <Nav.Link as={Link} to={"/Signup"}>Signup</Nav.Link>
                  )}
                  {auth.loggedIn && (
                    <>
                      <Navbar.Text>
                        Signed in as: <h7 className="user-name" >{auth.name}</h7>
                      </Navbar.Text>
                      <NavDropdown title="My Account" id="collasible-nav-dropdown">
                      <NavDropdown.Item as={Link} to={"/Account"}>Account settings</NavDropdown.Item>
                      <NavDropdown.Item as={Link} to={"/Mystore"}>My store</NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item as={Link} to={"/home"} onClick={SignOut}>Sign out</NavDropdown.Item>
                      </NavDropdown>
                    </>
                  )}
                  
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
        {/* react router functions   */}
        <div>
          <Switch>
            <Route exact path="/" component={() => (<Redirect to='/home' />)} />
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
            <Route path="/success">
              <SuccessPage  />
            </Route>
            <Route path="/mystore">
              <Mystore />
            </Route>
            {!auth.loggedIn && (
            <Route>
              <Home />
            </Route>
              )}
              {auth.loggedIn && (
            <Route>
              <Mystore />
            </Route>
            )}
        </Switch>
      </div>
    </Router>
)
}
            
            
           
