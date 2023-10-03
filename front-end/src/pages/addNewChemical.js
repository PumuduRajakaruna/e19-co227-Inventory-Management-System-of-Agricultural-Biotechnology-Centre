import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

const ChemicalForm = () => {
  const [formData, setFormData] = useState({
    chemicalName: '',
    quantity: '',
    unitPrice: '',
    brand: '',
    receivedDate: '',
    expirationDate: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Assuming the API endpoint is http://localhost:8080/chemical/updateStore
      const response = await axios.post('http://localhost:8080/chemical/updateStore', formData);

      // Handle the API response as needed
      console.log(response.data);
      // Show success alert
      alert('Chemical added successfully');
      // Redirect to the store page
      navigate('/store');
    } catch (error) {
      // Handle errors
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="container d-flex align-items-center justify-content-center vh-100">
      <div className="card p-4" style={{ width: '400px' }}>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="chemicalName" className="form-label">
              Chemical Name
            </label>
            <input
              type="text"
              className="form-control"
              id="chemicalName"
              name="chemicalName"
              value={formData.chemicalName}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="quantity" className="form-label">
              Quantity
            </label>
            <input
              type="text"
              className="form-control"
              id="quantity"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="unitPrice" className="form-label">
              Unit Price
            </label>
            <input
              type="text"
              className="form-control"
              id="unitPrice"
              name="unitPrice"
              value={formData.unitPrice}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="brand" className="form-label">
              Brand
            </label>
            <input
              type="text"
              className="form-control"
              id="brand"
              name="brand"
              value={formData.brand}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="receivedDate" className="form-label">
              Received Date
            </label>
            <input
              type="date"
              className="form-control"
              id="receivedDate"
              name="receivedDate"
              value={formData.receivedDate}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="expirationDate" className="form-label">
              Expiration Date
            </label>
            <input
              type="date"
              className="form-control"
              id="expirationDate"
              name="expirationDate"
              value={formData.expirationDate}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChemicalForm;
