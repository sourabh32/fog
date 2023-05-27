import React from 'react'
import { Link, Route,Routes } from 'react-router-dom'
import SignIn from '../components/SignIn'
import SignUp from '../components/Signup'
import "../styles/account.css"

const Account = () => {
  return (
    <div className='auth-container'>
       <nav>
      <ul>
        <li>
          <Link to="/signin">Sign In</Link>
        </li>
        <li>
          <Link to="/signup">Sign Up</Link>
        </li>
      </ul>
    </nav>
    
      
    </div>
  )
}

export default Account







