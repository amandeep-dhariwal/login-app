
// import './App.css';
// import Home from './pages/home'
import React from "react";
// import { Link } from "react-router-dom";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Login from "./pages/login"
import Home from "./pages/home"
import Signup from "./pages/signup"
import User from "./pages/user";


function App() {
  return (
    <div className="App">
      {/* <Home /> */}
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path = "/signup" element = {<Signup />} />
        <Route path = "/user" element = {<User />} />
      </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;
