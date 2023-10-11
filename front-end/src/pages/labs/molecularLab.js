import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import axios from 'axios';


const ChemicalTable = () => {
  const [labChemicals, setLabChemicals] = useState([]);
  const [selectedChemical, setSelectedChemical] = useState(null);
  const [updateQuantity, setUpdateQuantity] = useState('');
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const labName = 'Molecular'; // Set the lab name directly

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:8080/chemical/labs/getLabChemical?labName=${labName}`);
        const data = await response.json();
        console.log(data);
        setLabChemicals(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [labName]);

  useEffect(() => {
    console.log('Selected Chemical:', selectedChemical);
  }, [selectedChemical]);

  const handleTakeButtonClick = (labChemical) => {
    // Set the selected chemical and show the update modal
    setSelectedChemical(labChemical);
    setShowUpdateModal(true);
    setUpdateQuantity(''); // Clear the updateQuantity state when the modal opens
  };

  const handleCloseUpdateModal = () => {
    // Reset the selected chemical and hide the update modal
    setSelectedChemical(null);
    setShowUpdateModal(false);
    // Clear the showAlert state when the modal closes
    setShowAlert(false);
  };

  const handleChange = (e) => {
    setUpdateQuantity(e.target.value);
  };

  const handleUpdateQuantity = async () => {
    try {
      console.log('Before update - Selected Chemical:', selectedChemical);
  
      if (selectedChemical) {
        console.log('Update - Selected Chemical:', selectedChemical);
  
        const labId = selectedChemical.id;
        console.log('labId - Selected Chemical:', labId);
  
        const updatedData = {
          labName: labName,
          labQuantity: updateQuantity,
          chemical: {
            chemId: selectedChemical.chemical.chemId,
          },
        };
  
        const response = await fetch(`http://localhost:8080/chemical/labs/updateQuantity/${labId}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(updatedData),
        });
  
        if (response.ok) {
          let newFetchedQuantity;
  
          // Use axios for the asynchronous GET request
          try {
            const axiosResponse = await axios.get(`http://localhost:8080/chemical/labs/getChemicalById/${labId}`);
            newFetchedQuantity = axiosResponse.data.labQuantity;
            console.log('newFetchedQuantity:', newFetchedQuantity);
  
            if (newFetchedQuantity === 0) {
              const deleteResponse = await fetch(`http://localhost:8080/chemical/labs/delete/${labId}`, {
                method: 'DELETE',
              });
  
              if (deleteResponse.ok) {
                console.log('Delete API called successfully');
              } else {
                console.error('Delete API failed');
              }
            }
  
            setShowAlert(true);
  
            setTimeout(() => {
              setShowAlert(false);
              handleCloseUpdateModal();
            }, 2000);
  
            const fetchData = async () => {
              try {
                const response = await fetch(`http://localhost:8080/chemical/labs/getLabChemical?labName=${labName}`);
                const data = await response.json();
                console.log(data);
                setLabChemicals(data);
              } catch (error) {
                console.error('Error fetching data:', error);
              }
            };
  
            fetchData();
          } catch (axiosError) {
            console.error('Error with axios:', axiosError);
          }
        } else {
          console.error('Update failed');
        }
      } else {
        console.error('Invalid selectedChemical or missing chemId property');
      }
    } catch (error) {
      console.error('Error updating quantity:', error);
    }
  };

  return (
    <div>
      <div className="container mt-4">
      <h2>Lab Chemicals Table</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Lab Id</th>
            <th>Chemical Name</th>
            <th>Quantity</th>
            <th>Unit Price</th>
            <th>Brand</th>
            <th>Received Date</th>
            <th>Expiration Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {labChemicals.map((labChemical) => (
            <tr key={labChemical.id}>
              <td>{labChemical.id}</td>
              <td>{labChemical.chemical.chemicalName}</td>
              <td>{labChemical.labQuantity}</td>
              <td>{labChemical.chemical.unitPrice}</td>
              <td>{labChemical.chemical.brand}</td>
              <td>{labChemical.chemical.receivedDate}</td>
              <td>{labChemical.chemical.expirationDate}</td>
              <td>
                <button
                  className="btn btn-primary"
                  onClick={() => handleTakeButtonClick(labChemical)}
                >
                  Take
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Update Quantity Modal */}
      <Modal show={showUpdateModal} onHide={handleCloseUpdateModal}>
        <Modal.Header closeButton>
          <Modal.Title>Update Quantity</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="updateQuantity">
              <Form.Label>New Quantity:</Form.Label>
              <Form.Control
                type="text"
                value={updateQuantity}
                onChange={handleChange}
              />
            </Form.Group>

          {/* Show an alert after the update */}
          {showAlert && (
            <div className="alert alert-success" role="alert">
              Quantity updated successfully!
            </div>
          )}
          </Form>
          
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleUpdateQuantity}>
            Update
          </Button>
          <Button variant="secondary" onClick={handleCloseUpdateModal}>
            Cancel
          </Button>

        </Modal.Footer>
      </Modal>
      </div>
    </div>
  );
};

export default ChemicalTable;
