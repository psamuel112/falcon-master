import {React, useState} from 'react';
import  "./Otp.css";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import logo from "./images/logo.png";
import currency from "./images/currency.png"


const Otp = () => {
const [verificationCode, setVerificationCode] = useState({
  code: 'F5C41',
});

    const verifyEmail = async () => {
      const urlencoded = new URLSearchParams();
      urlencoded.append('code', verificationCode.code);

      const requestOptions = {
        method: 'POST',
        body: urlencoded,
        redirect: 'follow',
      };

      const verifyEmailResponse = await fetch(
        'https://falconlite.com/v1/api/verify-email',
        requestOptions
      );
      const result = await verifyEmailResponse.text();
      console.log(result);
      toast.success("Email confirmed successfully")
    };
  return (
    <div className="container">
      <div className="form-main">
        <img src={logo} alt="logo"
          style={{ height: "98px", width: "294px", marginLeft: "309px", marginTop: '80px' }} />
        <h3>Kindly enter Email verification code</h3>
        <p>To sign up, kindly enter the verification code sent to your email address</p>

        <form onSubmit={verifyEmail}>
        <div className="otp-group">
          {[1, 2, 3, 4, 5].map((digit, index) => {
            return (
              <input
                key={index}
                type="text"
                inputMode="numeric"
                autoComplete="one-time-code"
                pattern="\d{1}"
                maxLength={1}
                className="otp-input"
                onChange={(e) => setVerificationCode(e.target.value)}
              />

            )
          })}

        </div>
        <div className="btn">
          <button id="signUp"
            type="submit">
            Proceed
          </button>


        </div>

        </form>
        
        

      </div>

      <div className="right">
        <img src={currency} alt="curr" />

      </div>
    </div>
  )
}



export default Otp