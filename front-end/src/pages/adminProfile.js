import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/profileNavBar';

function UserProfile() {
  const [userId, setUserId] = useState(null);
  const [userEmail, setUserEmail] = useState(null);
  const [adminDetails, setadminDetails] = useState(null);

  const storedUser = JSON.parse(sessionStorage.getItem('user'));
  const username = storedUser.username;

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch user data by username
        const userResponse = await fetch(`http://localhost:8080/api/v1/user/getByUsername/${username}`);
        if (!userResponse.ok) {
          throw new Error('Failed to fetch user data');
        }

        const userData = await userResponse.json();
        setUserId(userData.id);
        setUserEmail(userData.email); // Assuming the email property exists in the API response

        // Fetch admin details by userId
        const adminResponse = await fetch(`http://localhost:8080/api/v1/user/getAdminByUid/${userData.id}`);
        if (!adminResponse.ok) {
          throw new Error('Failed to fetch admin details');
        }

        const adminData = await adminResponse.json();
        setadminDetails(adminData);
      } catch (error) {
        console.error('Failed to fetch data:', error.message);
      }
    };

    fetchData();
  }, [username]);

  return (
    <div className='main'>
      <NavBar />
      <div className="container mt-5">
        <div className="card">
          <div className="card-header">
            <h1>User Profile</h1>
          </div>
          <div className="card-body">
            <div className="text-center">
              <img
                src="https://via.placeholder.com/150"
                alt='{user.name}'
                className="img-thumbnail"
              />
            </div>
            <p className="card-text">User Id : {userId}</p>
            <p className="card-text">User Name : {username}</p>
            <p className="card-text">Email: {userEmail}</p>

            {adminDetails && (
              <>
                 <p className="card-title">First Name : {adminDetails.firstName}</p>
                 <p className="card-text">Last Name : {adminDetails.lastName}</p>
                {/* <p className="card-text">Batch : {adminDetails.batch}</p>
                <p className="card-text">Department : {adminDetails.department}</p>
                <p className="card-text">Mobile No : {adminDetails.mobileNo}</p> */}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
