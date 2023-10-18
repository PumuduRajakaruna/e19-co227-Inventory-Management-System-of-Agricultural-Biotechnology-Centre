import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from '../components/storeNavBar';
import UpdateQuantityForm from '../updateQuantityForm';

function App() {
  const [data, setData] = useState([]);
  const [selectedChemId, setSelectedChemId] = useState(null);
  const [showUpdateForm, setShowUpdateForm] = useState(false);

  useEffect(() => {
    // Fetch initial data when the component mounts
    fetch('http://localhost:8080/chemical/getStore')
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const handleUpdateQuantity = (chemId) => {
    // Set the selected chemical ID and show the update form
    setSelectedChemId(chemId);
    setShowUpdateForm(true);
  };

  const handleCloseUpdateForm = () => {
    // Reset the selected chemical ID and hide the update form
    setSelectedChemId(null);
    setShowUpdateForm(false);
  };

  const handleUpdateQuantitySubmit = () => {
    // Fetch updated data after the quantity has been updated
    fetch('http://localhost:8080/chemical/getStore')
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error('Error fetching data:', error));
  };

  return (
    <div className='main'>
      <NavBar />
      <div className="container mt-4">
        <h1>Chemicals</h1>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Chemical ID</th>
              <th scope="col">Chemical Name</th>
              <th scope="col">Quantity</th>
              <th scope="col">Unit Price</th>
              <th scope="col">Brand</th>
              <th scope="col">Received Date</th>
              <th scope="col">Expiration Date</th>
              <th scope="col">Update Quantity</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.chemId}>
                <td>{item.chemId}</td>
                <td>{item.chemicalName}</td>
                <td>{item.quantity}</td>
                <td>{item.unitPrice}</td>
                <td>{item.brand}</td>
                <td>{item.receivedDate}</td>
                <td>{item.expirationDate}</td>
                <td>
                  <button
                    className="btn btn-primary"
                    onClick={() => handleUpdateQuantity(item.chemId)}
                  >
                    Update
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <p>*Solid chemical masses are denoted in grams, while liquid volumes are expressed in milliliters</p>
      </div>

      {showUpdateForm && (
        <div className="update-form-overlay">
          <UpdateQuantityForm
            chemId={selectedChemId}
            onClose={handleCloseUpdateForm}
            onUpdateQuantity={handleUpdateQuantitySubmit}
          />
        </div>
      )}
    </div>
  );
}

export default App;
