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
  const [fetchedQuantity, setFetchedQuantity] = useState(''); // New state variable
  const labNames = ['FAO', 'Molecular', 'Micro', 'Tissue Culture', 'Expression', 'HPLC', 'Freezer'];

  useEffect(() => {
    // Fetch existing data for the chemical using the chemId
    axios.get(`http://localhost:8080/chemical/getChemicalById/${chemId}`)
      .then((response) => {
        // Set the existing data when the response is received
        setExistingData(response.data);
        // setFetchedQuantity(response.data.quantity);
        // console.log('Fetched Quantity:', response.data.quantity);
        
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

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   // Prepare the data for the PUT request
  //   const updatedData = {
  //     ...existingData,
  //     quantity: updateQuantity,
  //   };

  //   // Make the PUT request to update the quantity
  //   axios.put(`http://localhost:8080/chemical/updateQuantity/${chemId}`, updatedData)
  //     .then((response) => {
  //       // Log the response for debugging
  //       console.log('Update response:', response.data);

  //       // Call the onUpdateQuantity callback to update the UI or perform additional actions
  //       onUpdateQuantity();

  //       // Show alert after the update
  //       setShowAlert(true);

  //       // Close the form after a delay (you can adjust the delay as needed)
  //       setTimeout(() => {
  //         setShowAlert(false);
  //         onClose();
  //       }, 2000);

  //       // Make a new API request to add a chemical with the updated quantity and lab name
  //       const newChemicalData = {
  //         labName: labName,
  //         labQuantity: updateQuantity,
  //         chemical: {
  //           chemId: chemId,
  //         },
  //       };

  //       axios.post('http://localhost:8080/chemical/labs/addChemical', newChemicalData)
  //         .then((response) => {
  //           console.log('Chemical added to the lab:', response.data);
  //         })
  //         .catch((error) => {
  //           console.error('Error adding chemical to the lab:', error);
  //         });
  //     })
  //     .catch((error) => {
  //       console.error('Error updating quantity:', error);
  //     });
  // };
  
  const handleSubmit = (e) => {

    let newFetchedQuantity; // Declare the variable outside the axios.get block


    e.preventDefault();
    // Fetch the chemical data again to update the fetched quantity
    axios.get(`http://localhost:8080/chemical/getChemicalById/${chemId}`)
    .then((response) => {
      // Set the existing data when the response is received
      setExistingData(response.data);
      newFetchedQuantity = response.data.quantity; // Save the fetched quantity
      setFetchedQuantity(newFetchedQuantity); // Update the state
      
    })
  
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
  
            // Check if thresholdValue > quantity
            if (parseInt(existingData.thresholdValue) > parseInt(newFetchedQuantity-updateQuantity)) {
              console.log('Threshold Value:',existingData.thresholdValue);
              console.log('Upadate Quantity:',updateQuantity);
              console.log('Previouse Quantity:', newFetchedQuantity); // Use the new fetched quantity
              console.log('After Quantity:', newFetchedQuantity-updateQuantity); // Use the new fetched quantity

              const emailBodyContent = `Chemical Name: ${existingData.chemicalName}
Quantity: ${newFetchedQuantity-updateQuantity}
Unit Price: ${existingData.unitPrice}
Brand: ${existingData.brand}
            
Place a new order to avoid inconveniences
            `;

              // Create form data
              const formData = new FormData();
              formData.append('to', 'e19306@eng.pdn.ac.lk');
              formData.append('cc', ''); // Add CC recipients if needed
              formData.append('subject', 'Alart! Chemical Ran Out of Stock');
              formData.append('body', emailBodyContent);
  
              // Make the API request to send an email with form data
              axios.post('http://localhost:8080/mail/send', formData)
                .then((emailResponse) => {
                  console.log('Email sent:', emailResponse.data);
                })
                .catch((emailError) => {
                  console.error('Error sending email:', emailError);
                });
            }
  
            // Close the form after a delay (you can adjust the delay as needed)
            setTimeout(() => {
              setShowAlert(false);
              onClose();
            }, 2000);
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
