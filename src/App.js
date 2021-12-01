import React from 'react'
import Header from './Header'
import './App.css';
import Home from "./Home";
import {Route, Router, Switch} from "react-router-dom";

function App() {
  return (
    //BEM
    <Router>
    <div className="app">
      <Switch>
        <Route path="/checkout">
          <Header/>
          <h1>I am a Checkout Page </h1>
        </Route>
        <Route path="/">
        <Header/>
      <Home/>
      </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
