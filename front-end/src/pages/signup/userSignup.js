import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaUserCircle } from 'react-icons/fa';

import axios from 'axios';

function SignUp() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('User Name:', userName);
    console.log('Password:', password);
    console.log('Email:', email);

    const dataToSend = {
      username: userName,
      email: email,
      password: password,
    }

    try {
      console.log(dataToSend)
      const response = await axios.post('http://localhost:8080/api/v1/auth/user/signup', dataToSend);
      console.log(response.data); // You can handle the response as needed
    } catch (error) {
      console.error(error);
    }


  };

  // -----------------------------------------

// const navigate = useNavigate();
// const [isLoading, setIsLoading] = useState(false);

// const [isFormFilled, setIsFormFilled] = useState(false);
// const [formData, setFormData] = useState({
//   username: '',
//   email: '',
//   password: ''
// });
// const [retypePassword, setRetypePassword] = useState('');

// const handleFormChange = (e) => {
//   const form = e.target.form;
//   setIsFormFilled(form.checkValidity());
// };

// const handleInputChange = (e) => {
//   const { name, value } = e.target;
//   setFormData((prevData) => ({
//     ...prevData,
//     [name]: value
//   }));
//   handleFormChange(e);
// };

// const handlePasswordChange = (e) => {
//   const newPassword = e.target.value;
//   setFormData((prevData) => ({
//     ...prevData,
//     password: newPassword
//   }));
//   checkPasswordMatch(newPassword, retypePassword);
// };

// const handleRetypePasswordChange = (e) => {
//   const newRetypePassword = e.target.value;
//   setRetypePassword(newRetypePassword);
//   checkPasswordMatch(formData.password, newRetypePassword);
// };

// const checkPasswordMatch = (password, retypePassword) => {
//   if (password === retypePassword) {
//     setIsFormFilled(true);
//   } else {
//     setIsFormFilled(false);
//   }
// };

// const signupService = new SignupAdminService();

// const handleSubmit = async () => {
//   setIsLoading(true);
//   try {
//     setTimeout(async () => {
//       console.log(formData);
//       const userJSON = sessionStorage.getItem('user');
//       const user = JSON.parse(userJSON);
//       signupService.handleSignup(formData, user.accessToken);
//       setIsLoading(false);
//       navigate(-1);
//       alert("Signup Success!");
//   }, 500);
//   } catch (error) {
//     console.error("Signup failed:", error);
//   }
// };

// const handleBack = () => {
//   navigate("/");
// };


  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card" style={{ width: '400px' }}>
        <div className="card-header d-flex flex-column align-items-center">
          <FaUserCircle size={64} className="mb-3" />
          <h3>Sign Up</h3>
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
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
