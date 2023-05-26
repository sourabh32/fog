import React, { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserWithGoogleAuth,
  
} from "../utils/firebase.utils";

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
    <div>
      
      <div>
        <form onSubmit={handleSubmit} className="form">
          <input
            type="text"
            onChange={handleFormChange}
            name="displayName"
            value={displayName}
            required
          />
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
          <input
            type="password"
            onChange={handleFormChange}
            name="confirmPassword"
            value={confirmPassword}
            required
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
