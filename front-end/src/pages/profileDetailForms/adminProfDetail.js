import React, { useState , useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

function ContactForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [userId, setUserId] = useState(null);

  const storedUser = JSON.parse(sessionStorage.getItem('user'));
  const username = storedUser.username;
  console.log('username:', username);

  const navigate = useNavigate();

  useEffect(() => {
    // Fetch the user ID when the component mounts
    const fetchUserId = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/v1/user/getByUsername/${username}`);
        if (!response.ok) {
          throw new Error('Failed to fetch user ID');
        }

        const userData = await response.json();
        setUserId(userData.id);
      } catch (error) {
        console.error('Failed to fetch user ID:', error.message);
      }
    };

    fetchUserId();
  }, [username]);

  console.log('userId:', userId);

  
  const handleSubmit = async (e) => {
    e.preventDefault();

    const apiUrl = 'http://localhost:8080/api/v1/manager/registerAdmin';
    const requestData = {
      firstName: firstName,
      lastName: lastName,
      user: {
        id: userId,
      },
    };

    console.log('Request Payload:', JSON.stringify(requestData));

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
      });

      if (!response.ok) {
        throw new Error('Failed to register admin');
      }

      const responseData = await response.json();
      console.log('admin registration successful:', responseData);
      navigate('/adminHome');
    } catch (error) {
      console.error('admin registration failed:', error.message);
      navigate('/adminHome');
    }
  };

  return (
    <div className="container-fluid vh-100 d-flex flex-column align-items-center">
      <div className="card" style={{ width: '400px', marginTop: '20px' }}>
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
