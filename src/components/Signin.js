import React, { useState } from 'react';
import image from './login.jpg';
import './Signin.css';
import { Link } from 'react-router-dom';

export default function Signin() {
  const [resetPasswordSent , setResetPasswordSent] = useState(false);
  return (
    <>
    <div className='main'>
    <div className="signin">
        <div className='LeftSide'>
          <div className='OuterDiv'>
            <img src={image} alt="login"/>
          </div>
        </div>
        {!resetPasswordSent ? (
          <form className="form">
            <h2 className='title'>Login</h2>
            <div className='outer-div'>
              <input
                type="email"
                className="signininput"
                placeholder="Enter Email"
              />
              <input
                type="password"
                className="signininput"
                placeholder="Enter Password"
              />
              <button className="signingbtn">
                Sign In
              </button>
            </div>
           
            <div className='signup'>
              <Link to="/" >
                <p>Sign Up</p>
              </Link>
              {/* <span className="reset-password-link">
                <Link to="#">
                  Forgot Password?
                </Link>
              </span> */}
            </div>
          </form>
        ) : (
          <form className="signin">
            <h2>Reset Password</h2>
            <p>
              Please enter your email address. We will send you a link to reset your password.
            </p>
            <input
              type="email"
              className="signininput"
              placeholder="Enter Email"
            />
            <button className="signingbtn">
              Send Reset Email
            </button>
            <div className="reset-password-link">
              <Link to="#">
                Go Back
              </Link>
            </div>
          </form>
        )}
      </div>
    </div>
     
    </>
  );
}
