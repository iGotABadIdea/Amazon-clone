import React from 'react'
import Header from './Components/Header'
import './App.css';
import Home from "./Home";
import Checkout from "./checkout";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Login from './Components/login';

function App() {
  return (
    //BEM
    <Router>
      <div className="app">
        <Routes>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/checkout" element={
            <React.Fragment>
              <Header/>
              <Checkout/>
            </React.Fragment>
          }
          />
          <Route path="/" element={
          <React.Fragment>
            <Header/>
            <Home/>
          </React.Fragment>
          }/>
        </Routes>

      </div>
    </Router> 
  );
}

export default App;
