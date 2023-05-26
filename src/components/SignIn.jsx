import React, { useState } from "react";
import { createUserWithGoogleAuth, signInUserWithEmailandPassword, signInWithGooglePopup } from "../utils/firebase.utils";
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

    const {user} = await signInWithGooglePopup()
    console.log(user)
    const userDocRef = await createUserWithGoogleAuth(user)
    console.log(userDocRef)
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
      
      console.log(user)
      resetFormFields();
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div>
      
      <form onSubmit={handleSubmit} className="form">
        <input
          type="email"
          onChange={handleFormChange}
          value={email}
          name="email"
          required
        />
        <input
          type="password"
          onChange={handleFormChange}
          name="password"
          value={password}
          required
        />

        <div style={{display:"flex"}}>
          <button  type="submit">Sign In</button>
          <button type="button" onClick={handleClick}>Sign in with google</button>
        </div>
        
      </form>
    </div>
  );
};

export default SignIn;



