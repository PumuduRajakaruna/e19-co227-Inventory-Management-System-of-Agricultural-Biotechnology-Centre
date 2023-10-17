import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import logo from './components/images/UOPlogo.png'; // Replace with the path to your logo image
import { useNavigate } from 'react-router-dom';

function AddAdmin() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/api/v1/auth/admin/signup', formData);
      console.log('Response:', response.data);
      navigate("/adminHome");
      // Optionally, you can redirect to another page or perform other actions upon successful submission
    } catch (error) {
      console.error('Error submitting data:', error);
      // Handle errors here
    }
  };

  return (
    <div className="container mt-5">
      <div className="card mx-auto" style={{ maxWidth: '400px' }}>
        <div className="card-header">
          <div className="text-center mb-4">
            <img src={logo} alt="Logo" style={{ width: '100px', height: 'auto' }} />
          </div>
          <h1 className="text-center">Add New Admin</h1>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">
                User Name
              </label>
              <input
                type="text"
                className="form-control"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Add
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddAdmin;
