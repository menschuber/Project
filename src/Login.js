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
     <div>
       <form  className="form" onSubmit={handleSubmit}>
       <div>
       <h1>Log In</h1>
       </div>
         <div>
          <label htmlFor="email">Email address</label>
           <input 
              type="email" 
              placeholder="Enter Email"
              onChange={e => setEmail(e.target.value)} >
                </input>
         </div>
         <div>
         <label htmlFor="password">Password</label>
           <input 
              type="password" 
              placeholder="Enter Password"
              onChange={e => setPassword(e.target.value)}>
                </input>
         </div>
         <div>
           <button className="primary"type="submit">Submit</button>
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