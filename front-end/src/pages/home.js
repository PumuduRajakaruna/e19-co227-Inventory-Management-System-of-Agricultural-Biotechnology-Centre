import React from "react";
import NavBar from './components/HomeNavBar';
import Img from "./components/images/molecularBio.png";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';

export default function Home() {
  return (
    <div>
      <NavBar />
      <div style={{ position: 'relative', marginTop: '-24px'}}>
        <img
          src={Img}
          alt="Description of the image"
          className="img-fluid watermark"
          style={{ opacity: 0.9 }}
        />
        {/* Content container with absolute positioning */}
        <div className="position-absolute top-50 start-50 translate-middle text-center text-white">
          <h1 className="mb-4">Inventory Management System Of Agricultural Biotechnology Centre</h1>
          <p className="py-4">
            The Inventory Management System of the Agricultural Biotechnology Centre serves as a platform that links all the labs and their associated documents concerning chemicals and consumables. This system streamlines paperwork, offering a user-friendly environment that simplifies management tasks. By doing so, it not only saves time but also eliminates the need for hurried searches to locate chemicals.
          </p>
          <p>Sign Up as a Student</p>
          <Col xs="auto">
            <Button type="submit" href="/signup" variant="primary">Sign Up</Button>
          </Col>
        </div>
      </div>

      <footer className="bg-dark text-light text-center py-2">
        &copy; Inventory Management System - AgBC - 2023
      </footer>
    </div>
  );
}
