import './home.css';
import React from "react";
import {Link } from "react-router-dom";
import "./login"


function Home() {
    return(
        <header className = "App-header">
        <h1>Welcome</h1>
        <Link to= "/login">
            <button class="btn btn-primary">Login</button>
        </Link>
        <button class="btn btn-primary">SignUp</button>
      </header>
    ) 

}

export default Home;