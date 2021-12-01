import React from 'react'
import Header from './Components/Header'
import './App.css';
import Home from "./Home";
import Checkout from "./checkout";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
  return (
    //BEM
    <Router>
      <div className="app">
        <Header/>
        <Routes>
          <Route path="/checkout" element={<Checkout/>}/>
          <Route path="/" element={<Home/>}/>
        </Routes>

      </div>
    </Router> 
  );
}

export default App;
