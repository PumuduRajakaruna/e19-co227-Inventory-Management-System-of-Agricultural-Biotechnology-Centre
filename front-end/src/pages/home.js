import React from "react";
import NavBar from './components/HomeNavBar';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';

import Img from "./components/images/2-8.jpg";

export default function Home() {
  return (
    <div>
      <NavBar />
      <div style={{
        position: 'relative',
        height: '100vh', // Set to 100% of viewport height
        overflow: 'hidden', // Hide overflowing content
        marginBottom: '0', // Remove margin at the bottom
      }}>
        {/* Use the image as a background */}
        <div
          style={{
            backgroundImage: `url(${Img})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            position: 'absolute',
            top:0,
            left: 0,
            width: '100%',
            height: '100%',
            opacity: 2.9,
            marginBottom: '-60px',
            marginTop: '0px'
          }}
        ></div>
        
        {/* Content container with absolute positioning */}
        <div className="position-absolute top-50 start-50 translate-middle text-center text-light">
          <h1 className="mb-4 font-weight-bold">Inventory Management System Of Agricultural Biotechnology Centre</h1>
          <p className="py-4 font-weight-bold">
            The Inventory Management System of the Agricultural Biotechnology Centre serves as a platform that links all the labs and their associated documents concerning chemicals and consumables. This system streamlines paperwork, offering a user-friendly environment that simplifies management tasks. By doing so, it not only saves time but also eliminates the need for hurried searches to locate chemicals.
          </p>
          <p className="font-weight-bold">Sign Up as a Student</p>
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
