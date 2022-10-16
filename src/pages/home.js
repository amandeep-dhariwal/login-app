import './style.css';
import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from 'react-bootstrap';


function Home() {
    return (
        <header >
            <Navbar className="Navbar">Welcome To Login Application</Navbar>
            <div className="App-header">
                <br />
                <p>New To This Website? Please Sign UP</p>
                <p>Otherwise Please Login</p>
                <div className="ButtonGroup">
                    <div className = "btn">
                        <Link to="/login"><button class="btn btn-primary pr-1">Login</button></Link>
                    </div>
                    <div className = "btn">
                        <Link to="/signup"><button class="btn btn-primary">SignUp</button></Link>
                    </div>
                </div>
            </div>
        </header>
    )

}

export default Home;