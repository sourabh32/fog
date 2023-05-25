import React, { useState } from 'react'
import { createUserWithGoogleAuth, signInWithGooglePopup } from '../utils/firebase.utils'

const defaultFields = {
  displayName:"",
  email:"",
  password:"",
  confirmPassword:""
}

const Account = () => {
  const [formFields,setFormFields]= useState(defaultFields)
  const {displayName,email,password,confirmPassword } = formFields

  console.log(formFields)
    const handleClick = async () =>{

     const {user} = await signInWithGooglePopup()
     console.log(user)
     const userDocRef = await createUserWithGoogleAuth(user)
     console.log(userDocRef)
    }

    const handleFormCahnge = (e) =>{
     const {name,value} = e.target
     setFormFields({...formFields,[name]:value})
    }
    const resetFormFields = () => {
      setFormFields(defaultFormFields);
    };
  

    const handleSubmit = async (event) => {
      event.preventDefault();
  
      if (password !== confirmPassword) {
        alert("passwords do not match");
        return;
      }
  
      try {
        const { user } = await createAuthUserWithEmailAndPassword(
          email,
          password
        );
  
        await createUserDocumentFromAuth(user, { displayName });
        resetFormFields();
        setCurrentUser(user);
      } catch (error) {
        if (error.code === "auth/email-already-in-use") {
          alert("Cannot create user, email already in use");
        } else {
          console.log("user creation encountered an error", error);
        }
      }
    };
  
        
  return (
    <div>
        <button onSubmit={handleSubmit}>Sign in with google</button>
        <div>
          <form  className='form'>
            <input type='text' onChange={handleFormCahnge} name="displayName" value={displayName} required />
            <input type='email' onChange={handleFormCahnge}  value={email} name="email" required />
            <input type='password' onChange={handleFormCahnge} name="password" password={password}  required />
            <input type='password' onChange={handleFormCahnge} name="confirmPassword" 
             value={confirmPassword} required />
            <button type="submit">Submit</button>
          </form>
        </div>
    </div>
  )
}

export default Account