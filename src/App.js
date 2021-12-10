import React, {useEffect} from 'react'
import Header from './Components/Header'
import './App.css';
import Home from "./Home";
import Checkout from "./checkout";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Login from './Components/login';
import {auth} from "./firebase"
import {onAuthStateChanged} from "firebase/auth"
import { useDispatch,  } from 'react-redux';
import {login, logout, } from './slices/userSlice'


function App() {
const dispatch = useDispatch();


  useEffect(() => {
      const unSubscribe = onAuthStateChanged(auth, authUser => {
        if( authUser ){
        console.log(authUser)   
        dispatch(login({
          uid : authUser.uid,
          email: authUser.email,      // add the userid here if required in the original tutorial 
        }))

        } else {
          dispatch(logout())
        }
      });
      return unSubscribe;
  }, []);
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
