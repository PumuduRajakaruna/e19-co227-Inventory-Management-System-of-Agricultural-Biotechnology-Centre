import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Make a GET request to your backend API to fetch data
    fetch('http://localhost:8080/chemical/getStore') // Update the URL to match your API endpoint
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        // Log the data to the console for debugging
        console.log('Fetched data:', data);

        // Ensure the data is an array before setting it
        if (Array.isArray(data)) {
          setData(data);
        } else {
          console.error('Data is not an array:', data);
          setData([]); // Initialize data as an empty array in case of an error
        }
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setData([]); // Initialize data as an empty array in case of an error
      });
  }, []);

  const handleUpdateQuantity = (chemId) => {
    // Implement the logic to update the quantity for the given chemical ID
    console.log(`Updating quantity for chemical ID ${chemId}`);
    // You can add your update logic here, for example, opening a modal or redirecting to a new page.
  };

  return (
    <div className="container mt-4">
      <h1>Chemicals in Store</h1>
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
    </div>
  );
}

export default App;
