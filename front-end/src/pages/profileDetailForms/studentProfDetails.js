import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function ContactForm() {
  // State variables to store user input
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [telephone, setTelephone] = useState('');
  const [batch, setBatch] = useState('');
  const [department, setDepartment] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle the form data here, e.g., send it to a server or perform other actions.
    console.log('First Name:', firstName);
    console.log('Last Name:', lastName);
    console.log('Telephone:', telephone);
    console.log('Batch:', batch);
    console.log('Department:', department);
  };

  return (
    <div className="container-fluid vh-100 d-flex justify-content-center align-items-center">
      <div className="card" style={{ width: '400px' }}>
        <div className="card-header">Profile Details</div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="firstName" className="form-label">
                First Name
              </label>
              <input
                type="text"
                className="form-control"
                id="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="lastName" className="form-label">
                Last Name
              </label>
              <input
                type="text"
                className="form-control"
                id="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="telephone" className="form-label">
                Mobile Number
              </label>
              <input
                type="tel"
                className="form-control"
                id="telephone"
                value={telephone}
                onChange={(e) => setTelephone(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="batch" className="form-label">
                Batch
              </label>
              <input
                type="text"
                className="form-control"
                id="batch"
                value={batch}
                onChange={(e) => setBatch(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="department" className="form-label">
                Department
              </label>
              <input
                type="text"
                className="form-control"
                id="department"
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <ContactForm />
    </div>
  );
}

export default App;
