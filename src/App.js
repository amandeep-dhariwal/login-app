
// import './App.css';
// import Home from './pages/home'
import React from "react";
// import { Link } from "react-router-dom";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Login from "./pages/login"
import Home from "./pages/home"

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Home />
        <Routes>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
