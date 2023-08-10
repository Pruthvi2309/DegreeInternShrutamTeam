import React from "react";
import "./Login.css"
const RegistrationForm = () => {
    return(
        <div className="cover">
        <h1>Registration</h1>
      <input type="text" placeholder="First Name" /> 
      <input type="text" placeholder="Last Name" />
      <input type="email" placeholder="Enter Email" />
      <input type="contact" placeholder="Contact" />
      <input type="password" placeholder="Enter Password" />
      <input type="password" placeholder="Confrim your Password" />
      <input class="btn btn-primary" type="submit" value="Register"></input>

  
       </div>
    
    )
}
export default RegistrationForm