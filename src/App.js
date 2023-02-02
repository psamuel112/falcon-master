import Auth from "./components/Auth";
import "./App.css";
import React from "react";
import Otp from "./components/Otp";
import { ToastContainer } from 'react-toastify';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  
    return (
      <>
     <Router>
    <Routes>
      <Route exact path="/" element={<Auth />}/>
      <Route exact path="/Otp" element={<Otp />}/>
      </Routes>
    </Router> 
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
    />
    </>
    );
  
  
}

export default App;