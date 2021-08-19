import React from 'react'
import Header from './Header'
import './App.css';
import Home from "./Home";

function App() {
  return (
    //BEM
    <div className="app">
      <Header/>
      <Home/>
      {/*Body*/}
    </div>
  );
}

export default App;
