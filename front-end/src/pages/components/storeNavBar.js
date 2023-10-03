import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import img from './images/UOPlogo.png';

function HomeNavBar() {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary "  bg="dark" data-bs-theme="dark">
        <Container>
        <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/">
            <img
              src={img}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
        </Container>
      </Navbar>
      <br />
          <Navbar.Brand href="/">AgBC</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/adminHome">Home</Nav.Link>
            <Nav.Link href="/store/addChemical" >Add</Nav.Link>
          </Nav>
        </Container>

         

      </Navbar>
      <br />
    </>
  );
}

export default HomeNavBar;