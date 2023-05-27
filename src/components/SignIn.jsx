import React, { useState } from "react";
import {  signInUserWithEmailandPassword, signInWithGooglePopup } from "../utils/firebase.utils";
import "../styles/signin.css"
import { Link } from "react-router-dom";

const defaultFields = {
  email: "",
  password: "",
};

const SignIn = () => {
  const [formFields, setFormFields] = useState(defaultFields);
  const { email, password } = formFields;
 
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };
  const handleClick = async () =>{

    await signInWithGooglePopup()
    
    
   }

   const resetFormFields = () => {
    setFormFields(defaultFields);
  };
   const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const { user } = await signInUserWithEmailandPassword(
        email,
        password
      );
      
      
      resetFormFields();
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="auth-container-signin">
         <h2>Sign In</h2>
    <div className="sign-in-container">
   
      <form onSubmit={handleSubmit} className="form1" >
      <label >Input</label>
        <input
        className="input"
          type="email"
          onChange={handleFormChange}
          value={email}
          name="email"
          required
        />
        <label>Password</label>
        <input
         className="input"
          type="password"
          onChange={handleFormChange}
          name="password"
          value={password}
          required
        />

        <div >
          <button className="button"  type="submit">Sign In</button>
          <button className="google" type="button" onClick={handleClick}>Sign in with google</button>
        </div>
        
      </form>
      
    </div>
    <p className="form-link">Don't have an account? <Link to="/account/signup">Sign Up</Link></p>
    </div>
  );
};

export default SignIn;



