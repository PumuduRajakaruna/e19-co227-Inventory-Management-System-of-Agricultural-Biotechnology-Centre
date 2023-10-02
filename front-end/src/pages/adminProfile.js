import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/profileNavBar';

function UserProfile() {
  // Sample user data (replace with your actual user data)
  const user = {
    firstName: 'First Name',
    lastName: 'Last Name',
    userName: 'user name',
    userId: '27',
    email: 'example@gmail.com'
  };

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
              src="https://via.placeholder.com/150" // Replace with the URL of the user's profile picture
              alt={user.name}
              className="img-thumbnail"
            />
          </div>
          <p className="card-title">First Name : {user.firstName}</p>
          <p className="card-text">Last Name : {user.lastName}</p>
          <p className="card-text">User Name :{user.userName}</p>
          <p className="card-text">User Id : {user.userId}</p>
          <p className="card-text">Email: {user.email}</p>
        </div>
      </div>
    </div>
    </div>
  );
}

export default UserProfile;
