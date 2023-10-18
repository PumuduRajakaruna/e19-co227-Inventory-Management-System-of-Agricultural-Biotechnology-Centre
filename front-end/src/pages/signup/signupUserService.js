// SignupUserService.js

class SignupUserService {
    async handleSignup(userData) {
      try {
        const response = await fetch('http://localhost:8080/api/v1/auth/user/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(userData),
        });
   
  
        if (!response.ok) {
          throw new Error('Signup failed');
        }
  
        const responseData = await response.json();
        // sessionStorage.setItem('user', responseData.id);
        // console.log("session storage:",responseData.id);
        // You can handle the response data as needed
        return responseData;
      } catch (error) {
        throw new Error('Signup failed: ' + error.response.status === 400);
      }
    }
  }
  
  export default SignupUserService;
  