import React, { useState } from 'react';
import PropTypes from 'prop-types';

async function loginUser(credentials) {
  return fetch('http://localhost:8080/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
 }
 
 export default function Login({ setToken }) {
   const [email, setEmail] = useState();
   const [password, setPassword] = useState();
 
   const handleSubmit = async e => {
     e.preventDefault();
     const token = await loginUser({
       email,
       password
     });
     setToken(token);
   }
 
   return(
     <div className="login-wrapper">
       <h1>Please Log In</h1>
       <form onSubmit={handleSubmit}>
         <label>
           <p>Username</p>
           <input 
              type="email" 
              placeholder="Enter Email"
              onChange={e => setEmail(e.target.value)} />
         </label>
         <label>
           <p>Password</p>
           <input 
              type="password" 
              placeholder="Enter Password"
              onChange={e => setPassword(e.target.value)} />
         </label>
         <div>
           <button type="submit">Submit</button>
         </div>
          <label>
            <div>
              New customer?{''}
            </div>
          </label>
       </form>
     </div>
   )
 }
 
 Login.propTypes = {
   setToken: PropTypes.func.isRequired
 };