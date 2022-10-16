import React from "react";
import { Link } from "react-router-dom";
import axios from "axios"
import { useState, useRef } from "react";
import User from "./user";

function Login() {

  const [userEmail, setEmail] = useState('');
  const [userPassword, setPassword] = useState('');
  const isLoggedIn = useRef(false)

  const handleEmail = (e) =>{
    setEmail(e.target.value);
  }

  const handlePassword = (e) =>{
    setPassword(e.target.value);
  }

  const authenticateUser= ()=> {
    let request = 
    {
      email: userEmail, 
      password: userPassword
    }
    axios.post("/users", request)
    .then(resp =>{
      alert(resp.data.message);
      console.log(isLoggedIn)
      isLoggedIn.current = true
      console.log(isLoggedIn)
    })
    .catch(err =>{
      console.log('error found', err);
      console.log(isLoggedIn)
    })
  }

  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <div class="form-group">
          <label for="exampleInputEmail1" class="form-label">Email address</label>
          <input type="email" value = {userEmail} onChange = {handleEmail} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1" class="form-label">Password</label>
          <input type="password" value = {userPassword} onChange = {handlePassword} class="form-control" id="exampleInputPassword1" />
        </div>
        <br />
        <button type="submit" class="btn btn-primary" onClick={authenticateUser}>Login</button>
      </form>
    </div>

  )
}
export default Login;