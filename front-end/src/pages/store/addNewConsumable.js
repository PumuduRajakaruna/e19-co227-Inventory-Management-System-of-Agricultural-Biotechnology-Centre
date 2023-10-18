import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

const ConsumableForm = () => {
  const [formData, setFormData] = useState({
    conName: '',
    quantity: '',
    unitPrice: '',
    brand: '',
    receivedDate: '',
    thresholdValue: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/consumable/updateConsumableStore', formData);

      // Handle the API response as needed
      console.log(response.data);
      // Show success alert
      alert('Consumable added successfully');
      // Redirect to the store page
      navigate('../store/consumable');
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
            <label htmlFor="conName" className="form-label">
              Consumable Name
            </label>
            <input
              type="text"
              className="form-control"
              id="conName"
              name="conName"
              value={formData.conName}
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
            <label htmlFor="thresholdValue" className="form-label">
              Threshold Value
            </label>
            <input
              type="text"
              className="form-control"
              id="thresholdValue"
              name="thresholdValue"
              value={formData.thresholdValue}
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

export default ConsumableForm;
