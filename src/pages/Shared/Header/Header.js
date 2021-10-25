import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
    const {user,logOut}=useAuth();
    return (
       
    <>
        <Navbar bg="dark" variant="dark"  sticky="top" collapseOnSelect expand="lg">
            <Container>
            <Navbar.Brand href="#home" className="text-warning">RUNNER'S LIFE</Navbar.Brand>
            <Navbar.Toggle />
           
            <Navbar.Collapse className="justify-content-end">
            <Nav.Link as={HashLink} to="/home#home" className="text-white">Home</Nav.Link>
            <Nav.Link as={HashLink} to="/home#services" className="text-white">Services</Nav.Link>
            <Nav.Link as={HashLink} to="/blog" className="text-white">Blogs</Nav.Link>
            <Nav.Link as={HashLink} to="/gallery" className="text-white">Our Gallery</Nav.Link>
              {user?.email?
                <button onClick={logOut}  className="btn-warning mx-3 rounded-3">LogOut</button>:
                  <Nav.Link as={HashLink} to="/login" className="btn-warning mx-3 rounded-3">Login</Nav.Link>
              }
           

            <Navbar.Text>
                Signed in as: <a href="#login">{user?.displayName}</a>
            </Navbar.Text>
            </Navbar.Collapse>
            </Container>
        </Navbar>
        <br />
        
    </>
       
    );
};

export default Header;