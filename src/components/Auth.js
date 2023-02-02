import React, { useState } from 'react';
import { toast } from 'react-toastify';
import {useNavigate} from "react-router-dom"
import "./Auth.css";
import logo from "./images/logo.png";
import 'react-toastify/dist/ReactToastify.css';

const Auth = () => {
const Navigate = useNavigate()
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [sendEmailResponse, setSendEmailResponse] = useState(null);

  const handleSendEmail = async event => {
    event.preventDefault();

    const urlencoded = new URLSearchParams();
    urlencoded.append("name", name);
    urlencoded.append("email", email);
    urlencoded.append("phone", phone);
    urlencoded.append("password", password);

    const requestOptions = {
      method: 'POST',
      body: urlencoded,
      redirect: 'follow'
    };

    //making a post request to the falcon api
    try {
      const response = await fetch("https://falconlite.com/v1/api/send-email", requestOptions);
      const result = await response.text();
      setSendEmailResponse(result); //using state to update the result variable
      toast.success("Email verifiction code sent successfully.")
      Navigate("/Otp")

    } catch (error) {
      toast.error("Unable to send email verification code")
    }
  };

  
    return (
      <div className="container">
        <div className="form-main">
          <img
            src={logo}
            alt="logo"
            style={{ height: '120px', width: '500px', marginLeft: '10rem' }}
          />
          <h3>Create an account</h3>
          <p>
            Register on our website with our correct email address and
            information
          </p>

          <form onSubmit={handleSendEmail}>
            <div className="form-inner">
              <div className="form-group">
                <label id="firstName">First Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Jeremiah"
                  required
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label id="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Fame@gmail.com"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label id="number">Phone Number</label>
                <input
                  type="tel"
                  id="number"
                  name="number"
                  placeholder="2346655678"
                  required
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label id="number">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="*********"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="checkBox">
                <input type="checkbox" />
                <label>Remember me</label>
              </div>
            </div>
            <button id="signUp" type="submit">
              Sign up
            </button>
          </form>
          <div className="signup-footer">
            <p>
              Already have an account? <span>Sign up</span>
            </p>
          </div>
        </div>

        <div className="right"></div>
        {sendEmailResponse && <div>{sendEmailResponse}</div>}
      </div>
    );
}

export default Auth
