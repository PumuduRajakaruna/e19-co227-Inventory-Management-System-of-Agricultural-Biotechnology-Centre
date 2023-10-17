import React, { useState } from 'react';
import { Container, Form, Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function ChangeUserNameEmailPassword() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const [isFormFilled, setIsFormFilled] = useState(false);
  const [formData, setFormData] = useState({
    password: '',
    newUsername: '',
    newEmail: '',
    newPassword: '',
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
    const newpassword = e.target.value;
    setFormData((prevData) => ({
      ...prevData,
      newPassword: newpassword,
    }));
    checkPasswordMatch(newpassword, retypePassword);
  };

  const handleRetypePasswordChange = (e) => {
    const newRetypePassword = e.target.value;
    setRetypePassword(newRetypePassword);
    checkPasswordMatch(formData.newPassword, newRetypePassword);
  };

  const checkPasswordMatch = (password, retypePassword) => {
    if (password === retypePassword) {
      setIsFormFilled(true);
    } else {
      setIsFormFilled(false);
    }
  };

  const user = JSON.parse(sessionStorage.getItem('user'));
  console.log('user', user);
  console.log('user id', user.id);

  const handleUpdate = async (data) => {
    try {
      const user = JSON.parse(sessionStorage.getItem('user'));
      const response = await axios.put(
        `http://localhost:8080/api/v1/user/update/${user.id}`,
        data,
        {
          headers: {
            Authorization: `Bearer ${user.accessToken}`,
          },
        }
      );
      console.log('response data:',response.data); // Log the response for debugging
    } catch (error) {
      console.error('Update failed:', error);
    }
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      setTimeout(() => {
        console.log(formData);
        handleUpdate(formData);
        setIsLoading(false);
        alert('Update success!');
        // navigate(-1);
      }, 500);
    } catch (error) {
      console.error('Update failed:', error);
    }
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <>
      <div className="body">
        <Container>
          <div className="d-flex justify-content-center">
            <Card className="shadow col-md-5">
              <Card.Body>
                <h2 className="d-flex justify-content-center topic fs-2 mb-0">
                  Renew Login Credentials
                </h2>
                <pre></pre>
                <section className="section bg-c-light border-top border-bottom">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-12">
                        <Form>
                          <Form.Group className="mb-1" controlId="formBasicEmail">
                            <Form.Label>Existing Password</Form.Label>
                            <Form.Control
                              type="password"
                              name="password"
                              placeholder="Enter Existing Password"
                              onChange={handleInputChange}
                              required
                            />
                          </Form.Group>

                          <Form.Group className="mb-1" controlId="formBasicUsername">
                            <Form.Label>New Username</Form.Label>
                            <Form.Control
                              type="text"
                              name="newUsername"
                              placeholder="Enter New Username"
                              onChange={handleInputChange}
                              required
                            />
                          </Form.Group>

                          <Form.Group className="mb-1" controlId="formBasicEmail">
                            <Form.Label>New Email</Form.Label>
                            <Form.Control
                              type="text"
                              name="newEmail"
                              placeholder="Enter New Email"
                              onChange={handleInputChange}
                              required
                            />
                          </Form.Group>

                          <Form.Group className="mb-1" controlId="formBasicPassword">
                            <Form.Label>New Password</Form.Label>
                            <Form.Control
                              type="password"
                              name="newPassword"
                              placeholder="New Password"
                              onChange={handlePasswordChange}
                              required
                            />
                          </Form.Group>

                          <Form.Group className="mb-1" controlId="formBasicRetypePassword">
                            <Form.Label>Retype New Password</Form.Label>
                            <Form.Control
                              type="password"
                              placeholder="Retype New password"
                              onChange={handleRetypePasswordChange}
                              required
                            />
                          </Form.Group>

                          <div className="d-flex justify-content-between align-items-center mt-3">
                            <Button
                              variant="primary"
                              type="button"
                              className="btn-light btn-outline-primary"
                              onClick={handleSubmit}
                              disabled={!isFormFilled}
                            >
                              Save
                            </Button>
                            <Button
                              variant="primary"
                              type="button"
                              onClick={handleBack}
                              className="btn-light btn-outline-primary"
                            >
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
    </>
  );
}

export default ChangeUserNameEmailPassword;
