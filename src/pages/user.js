import {Link } from "react-router-dom";
import Login from "./login"
function User() {
    return(
        <div>
            <p> Welcome User</p>
            <Link to="/login"><button>Logout</button></Link>
        </div>
    )
}

export default User;