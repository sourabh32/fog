import React, { useContext, useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserWithGoogleAuth,
  
} from "../utils/firebase.utils";

import "../styles/signup.css"
import { Link } from "react-router-dom";
const defaultFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUp = () => {
  const [formFields, setFormFields] = useState(defaultFields);
  const { displayName, email, password, confirmPassword } = formFields;
  
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };
  const resetFormFields = () => {
    setFormFields(defaultFields);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("passwords do not match");
      return;
    }
    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
       
      const userDocRef = await createUserWithGoogleAuth(user, {
        displayName: displayName,
      });
      console.log(userDocRef);
      resetFormFields();
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="auth-container-signup" >
      <h2>Sign Up</h2>
      
    <div className="sign-up-container" >
      
      
        <form onSubmit={handleSubmit} className="form2">
          <label>Display Name</label>
          <input
           className="input"
            type="text"
            onChange={handleFormChange}
            name="displayName"
            value={displayName}
            required
          />
          <label>Email</label>
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
          <label>Confirm Password</label>
          <input
           className="input"
            type="password"
            onChange={handleFormChange}
            name="confirmPassword"
            value={confirmPassword}
            required
          />
          <button type="submit">Submit</button>
        </form>
       
    </div>
    <p className="form-link">Already have an account? <Link to="/account/signin">Sign In</Link></p>
    </div>
  );
};

export default SignUp;
