import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
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
            <Nav.Link href="/studentHome">Home</Nav.Link>
            <Nav.Link href="/studentProfileSetings" >Settings</Nav.Link>
          </Nav>
          
          <Col xs="auto">
            <Button type="submit">Sign Out</Button>
          </Col>

        </Container>

         

      </Navbar>
      <br />
      {/* <Navbar expand="lg" bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar> */}
    </>
  );
}

export default HomeNavBar;