import React, {useEffect} from 'react'
import Header from './Components/Header'
import './App.css';
import Home from "./Home";
import Checkout from "./checkout";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Login from './Components/login';
import {auth} from "./firebase"
import {onAuthStateChanged} from "firebase/auth"
import { useDispatch } from 'react-redux';
import {addUser} from './slices/userSlice'

function App() {
  const dispatch=useDispatch()

  useEffect(() => {
      onAuthStateChanged(auth, authUser => {
        console.log('The User is >>> ',authUser);
        if( authUser ){
          dispatch(addUser(authUser))

        } else {
          
        }
      })
  }, [])
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
