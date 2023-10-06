import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Modal, Button, Form } from 'react-bootstrap';

const UpdateQuantityForm = ({ chemId, onClose, onUpdateQuantity }) => {
  const [existingData, setExistingData] = useState({
    chemicalName: '',
    quantity: '',
    unitPrice: '',
    brand: '',
    receivedDate: '',
    expirationDate: '',
    thresholdValue: '',
  });
  const [updateQuantity, setUpdateQuantity] = useState('');
  const [labName, setLabName] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const labNames = ['FAO', 'Molecular', 'Micro', 'Tissue Culture', 'Expression', 'HPLC', 'Freezer'];

  useEffect(() => {
    // Fetch existing data for the chemical using the chemId
    axios.get(`http://localhost:8080/chemical/getChemicalById/${chemId}`)
      .then((response) => {
        // Set the existing data when the response is received
        setExistingData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching existing data:', error);
      });
  }, [chemId]);

  const handleChange = (e) => {
    setUpdateQuantity(e.target.value);
  };

  const handleLabChange = (e) => {
    setLabName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Prepare the data for the PUT request
    const updatedData = {
      ...existingData,
      quantity: updateQuantity,
    };

    // Make the PUT request to update the quantity
    axios.put(`http://localhost:8080/chemical/updateQuantity/${chemId}`, updatedData)
      .then((response) => {
        // Log the response for debugging
        console.log('Update response:', response.data);

        // Call the onUpdateQuantity callback to update the UI or perform additional actions
        onUpdateQuantity();

        // Show alert after the update
        setShowAlert(true);

        // Close the form after a delay (you can adjust the delay as needed)
        setTimeout(() => {
          setShowAlert(false);
          onClose();
        }, 2000);

        // Make a new API request to add a chemical with the updated quantity and lab name
        const newChemicalData = {
          labName: labName,
          labQuantity: updateQuantity,
          chemical: {
            chemId: chemId,
          },
        };

        axios.post('http://localhost:8080/chemical/labs/addChemical', newChemicalData)
          .then((response) => {
            console.log('Chemical added to the lab:', response.data);
          })
          .catch((error) => {
            console.error('Error adding chemical to the lab:', error);
          });
      })
      .catch((error) => {
        console.error('Error updating quantity:', error);
      });
  };

  return (
    <Modal show={true} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Update Quantity</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="updateQuantity">
            <Form.Label>New Quantity:</Form.Label>
            <Form.Control
              type="text"
              value={updateQuantity}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="labName">
            <Form.Label>Lab Name:</Form.Label>
            <Form.Control
              as="select"
              value={labName}
              onChange={handleLabChange}
            >
              <option value="" disabled>Select a lab</option>
              {labNames.map((lab) => (
                <option key={lab} value={lab}>
                  {lab}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
          <div className="mt-3">
            <Button variant="primary" type="submit" className="mr-2">
              Update
            </Button>
            <Button variant="secondary" onClick={onClose}>
              Cancel
            </Button>
          </div>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        {showAlert && (
          <div className="alert alert-success" role="alert">
            Quantity updated successfully!
          </div>
        )}
      </Modal.Footer>
    </Modal>
  );
};

export default UpdateQuantityForm;
