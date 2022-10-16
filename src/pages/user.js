import {Link } from "react-router-dom";
import './style.css';
import { Navbar } from 'react-bootstrap';


function User() {
    return(
        <div>
            <Navbar className="Navbar">Welcome User</Navbar>
        <div className = "Form">
            <p>Hit Logout To Return To Login Page</p>
            <Link to="/login"><button>Logout</button></Link>
        </div>
        </div>
    )
}

export default User;