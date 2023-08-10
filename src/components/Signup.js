import React from 'react';
import image from './login.jpg'
import './Signin.css';
import { Link } from 'react-router-dom';

export default function Signup() {
  
  return (
    <>
    <div className='main'>
    <div className="signin">
        <div className='LeftSide'>
          <div className='OuterDiv'>
            <img src={image} alt="login"/>
          </div>
        </div>
        <form className="form">
          <h2 className='title'>Sign Up</h2>
          <div className='outer-div'>
          <input
            type="text"
            className="signininput"
            placeholder="Enter Name"
          />
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
            Sign Up
          </button>
          </div>
          <p style={{textAlign:'center'}}>or</p>
          <Link style={{textAlign:'center'}} to="/sign-in" >
                <p style={{marginTop:'10px',fontSize:'18px'}}>Sign In</p>
          </Link>
        </form>
      </div>
    </div>
     
    </>
  );

  
}