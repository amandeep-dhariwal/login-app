import React from "react";
import { Link } from "react-router-dom";
import axios from "axios"
import { useState, useRef } from "react";
import './style.css';
import { Navbar } from 'react-bootstrap';


function Login() {

  const [userEmail, setEmail] = useState('');
  const [userPassword, setPassword] = useState('');
  const isLoggedIn = useRef(false)

  const handleEmail = (e) => {
    setEmail(e.target.value);
  }

  const handlePassword = (e) => {
    setPassword(e.target.value);
  }

  const authenticateUser = () => {
    let request =
    {
      email: userEmail,
      password: userPassword
    }
    axios.post("/users", request)
      .then(resp => {
        alert(resp.data.message);
        isLoggedIn.current = true;
      })
      .catch(err => {
        console.log('error found', err);
      })
  }

  return (
    <div>
      <Navbar className="Navbar">Please Enter Your Credentials</Navbar>
      <div className="Form">
        <br />
        <br />
        <form onSubmit={(e) => e.preventDefault()}>
          <div class="form-group">
            <label for="exampleInputEmail1" class="form-label">Email address</label>
            <input type="email" value={userEmail} onChange={handleEmail} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1" class="form-label">Password</label>
            <input className="input" type="password" value={userPassword} onChange={handlePassword} class="form-control" id="exampleInputPassword1" />
          </div>
          <br />
          <Link to ="/user"><button type="submit" class="btn btn-primary" onClick={authenticateUser}> Login </button></Link>
        </form>
      </div>
    </div>

  )
}
export default Login;