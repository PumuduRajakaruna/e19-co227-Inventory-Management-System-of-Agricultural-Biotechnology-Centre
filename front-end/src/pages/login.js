import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaUserCircle } from 'react-icons/fa'; // Import the profile picture icon
import axios from 'axios';

function Login() {
  // State variables to store user input
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    // You can add your login logic here
    console.log('User Name:', userName);
    console.log('Password:', password);

    const dataToSend = {
      username: userName,
      password: password,
    }

    try {
      console.log(dataToSend)
      const response = await axios.post('http://localhost:8080/api/v1/auth/all/signin', dataToSend);
      console.log(response.data); // You can handle the response as needed
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card" style={{ width: '400px' }}>
        <div className="card-header d-flex flex-column align-items-center">
          <FaUserCircle size={64} className="mb-3" /> {/* Profile picture icon */}
          <h3>Login</h3>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="userName" className="form-label">
                User Name
              </label>
              <input
                type="text"
                className="form-control"
                id="userName"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
