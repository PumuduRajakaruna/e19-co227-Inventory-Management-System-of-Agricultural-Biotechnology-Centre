import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from '../components/storeConsumableNavBar';
import UpdateQuantityForm from '../updateQuantityForm';

function App() {
  const [data, setData] = useState([]);
  const [selectedChemId, setSelectedChemId] = useState(null);
  const [showUpdateForm, setShowUpdateForm] = useState(false);

  useEffect(() => {
    // Fetch initial data when the component mounts
    fetch('http://localhost:8080/consumable/getStore')
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const handleUpdateQuantity = (chemId) => {
    // Set the selected Consumable ID and show the update form
    setSelectedChemId(chemId);
    setShowUpdateForm(true);
  };

  const handleCloseUpdateForm = () => {
    // Reset the selected Consumable ID and hide the update form
    setSelectedChemId(null);
    setShowUpdateForm(false);
  };

  const handleUpdateQuantitySubmit = () => {
    // Fetch updated data after the quantity has been updated
    fetch('http://localhost:8080/consumable/getStore')
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error('Error fetching data:', error));
  };

  return (
    <div className='main'>
      <NavBar />
      <div className="container mt-4">
        <h1>Consumables</h1>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Consumable ID</th>
              <th scope="col">Consumable Name</th>
              <th scope="col">Quantity</th>
              <th scope="col">Unit Price</th>
              <th scope="col">Brand</th>
              <th scope="col">Received Date</th>
              <th scope="col">Update Quantity</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.conId}>
                <td>{item.conId}</td>
                <td>{item.conName}</td>
                <td>{item.quantity}</td>
                <td>{item.unitPrice}</td>
                <td>{item.brand}</td>
                <td>{item.receivedDate}</td>
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
