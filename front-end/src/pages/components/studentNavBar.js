import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import img from './images/UOPlogo.png';

function HomeNavBar() {
  const [chemicalName, setChemicalName] = useState('');
  const [chemicalDetails, setChemicalDetails] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleSearch = async () => {
    try {
      const response = await fetch(`http://localhost:8080/chemical/labs/findLabChemical?chemName=${chemicalName}`);
      const data = await response.json();

      setChemicalDetails(data);
      setShowModal(true);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setChemicalDetails(null);
  };

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary " bg="dark" data-bs-theme="dark">
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
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/studentProfile">Profile</Nav.Link>
          </Nav>

          <Col xs="auto">
            <div className="d-flex">
              <input
                type="text"
                placeholder="Search Chemical"
                value={chemicalName}
                onChange={(e) => setChemicalName(e.target.value)}
                className="form-control me-2"
              />
              <Button type="button" onClick={handleSearch}>
                Search
              </Button>
            </div>
          </Col>
        </Container>
      </Navbar>

      {/* Modal for displaying chemical details */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Chemical Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {chemicalDetails && chemicalDetails.map((chemical, index) => (
            <div key={index}>
              <p>Lab Name: {chemical.labName}</p>
              <p>Lab Quantity: {chemical.labQuantity}</p>
              {/* Add more details as needed */}
              <hr />
            </div>
          ))}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default HomeNavBar;
