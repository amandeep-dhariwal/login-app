import React from "react";
import axios from "axios"
import { useState } from "react";


function Signup() {

    const [userName, setName] = useState('');
    const [userEmail, setEmail] = useState('');
    const [userPassword, setPassword] = useState('');

    const handleName = (e) => {
        setName(e.target.value)
    }
    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handlePassword = (e) => {
        setPassword(e.target.value)
    }
    
    function addUser(){
        let request = 
    {
      email: userEmail, 
      password: userPassword,
      name: userName
    }
    axios.patch("/users", request)
    .then(resp =>{
      alert(resp.data.message);
    })
    .catch(err =>{
      console.log('error found', err);
    })
}

    return (
        <div>
            <form onSubmit={(e) => e.preventDefault()}>
                <div class="form-group">
                    <label>Full Name</label>
                    <input type="text" value = {userName} onChange={handleName} class="form-control" id="exampleInputName" aria-describedby="emailHelp" />
                </div>
                <div class="form-group">
                    <label >Email Address</label>
                    <input type="email" value = {userEmail} onChange={handleEmail} class="form-control" id="exampleInputEmail" />
                </div>
                <div class="form-group">
                    <label >Password</label>
                    <input type="password" value = {userPassword} onChange={handlePassword} class="form-control" id="exampleInputPassword" />
                </div>
                <br/>
                <button type="submit" class="btn btn-primary" onClick = {addUser}>Submit</button>
            </form>
        </div>
    )
}

export default Signup;