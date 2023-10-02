import React from "react";
import NavBar from './components/HomeNavBar';
import Img from "./components/images/molecularBio.png";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';

export default function Home() {
  return (
    <div className="body d-flex flex-column" style={{ minHeight: "100vh" }}>
      <NavBar />
      <div className="container mt-5 flex-grow-1">
        <div className="row">
          <div className="col-md-6">
            <h1>Inventory Management System Of Agricultural Biotechnology Centre</h1>
            <p className="py-4">
            The Inventory Management System of the Agricultural Biotechnology Centre serves as a platform that links all the labs and their associated documents concerning chemicals and consumables. This system streamlines paperwork, offering a user-friendly environment that simplifies management tasks. By doing so, it not only saves time but also eliminates the need for hurried searches to locate chemicals.
            </p>
            <p>Sign Up as a Student</p>
            <Col xs="auto">
            <Button type="submit" href="/signup">Sign Up</Button>
            </Col>
          </div>
          <div className="col-md-6">
            <div className="w-full md:w-1/2 flex justify-center items-center">
              <img src={Img} alt="Description of the image" width="400" height="300" />
            </div>
          </div>
        </div>
      </div>

      {/* Footer as a horizontal line at the bottom */}
      <footer className="bg-dark text-light text-center py-2">
        &copy; Inventory Management System - AgBC - 2023
      </footer>
    </div>
  );
}
