// Import necessary dependencies and components

import React, { useState } from 'react';
import { Container, Form, Button, Card } from 'react-bootstrap';
import SignupUserService from './signupUserService'; // Make sure the path is correct
import { useNavigate } from 'react-router-dom';
import img from './UOPlogo.png';

function UserSignup() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const [isFormFilled, setIsFormFilled] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [retypePassword, setRetypePassword] = useState('');

  const handleFormChange = (e) => {
    const form = e.target.form;
    setIsFormFilled(form.checkValidity());
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    handleFormChange(e);
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setFormData((prevData) => ({
      ...prevData,
      password: newPassword,
    }));
    checkPasswordMatch(newPassword, retypePassword);
  };

  const handleRetypePasswordChange = (e) => {
    const newRetypePassword = e.target.value;
    setRetypePassword(newRetypePassword);
    checkPasswordMatch(formData.password, newRetypePassword);
  };

  const checkPasswordMatch = (password, retypePassword) => {
    setIsFormFilled(password === retypePassword);
  };

  const signupService = new SignupUserService();

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      // Use await here
      const responseData = await signupService.handleSignup(formData);
      setIsLoading(false);

      navigate('/studentReg');
      alert('Signup Success!');

      sessionStorage.setItem('user', JSON.stringify(formData));
      console.log('form data:', formData);

      console.log(responseData);
    } catch (error) {
      console.error('Signup failed:', error.message);
      alert('Signup Failed',error.message);
    }
  };

  const handleBack = () => {
    navigate('/');
  };

  return (
    <div className='body d-flex align-items-center justify-content-center' style={{ minHeight: '100vh' }}>
      <Container>
        <div className='d-flex justify-content-center'>
          <Card className='shadow col-md-4'>
            <Card.Body>
              <h2 className='d-flex justify-content-center'>
                <img src={img} alt='UOP Logo' style={{ width: '70px', height: 'auto' }} className='img-fluid' />
              </h2>
              <pre></pre>
              <section className='section bg-c-light border-top border-bottom'>
                <div className='container'>
                  <div className='row'>
                    <div className='col-md-12'>
                      <Form>
                        <Form.Group className="mb-3" controlId="formBasicUsername">
                          <Form.Label>Username</Form.Label>
                          <Form.Control type="text" name="username" placeholder="Enter username" onChange={handleInputChange} required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label>Email</Form.Label>
                          <Form.Control type="email" name="email" placeholder="Enter email" onChange={handleInputChange} required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                          <Form.Label>Password</Form.Label>
                          <Form.Control type="password" name="password" placeholder="Password" onChange={handlePasswordChange} required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicRetypePassword">
                          <Form.Label>Retype Password</Form.Label>
                          <Form.Control type="password" placeholder="Retype password" onChange={handleRetypePasswordChange} required />
                        </Form.Group>

                        <div className="d-flex justify-content-between align-items-center mt-3">
                          <Button variant="primary" type="button" className="btn-light btn-outline-primary" onClick={handleSubmit} disabled={!isFormFilled || isLoading}>
                            {isLoading ? 'Signing up...' : 'Sign up'}
                          </Button>
                          <Button variant="primary" type="button" onClick={handleBack} className="btn-light btn-outline-primary">
                            Back
                          </Button>
                        </div>
                      </Form>
                      <pre></pre>
                    </div>
                  </div>
                </div>
              </section>
            </Card.Body>
          </Card>
        </div>
      </Container>
    </div>
  );
}

export default UserSignup;
