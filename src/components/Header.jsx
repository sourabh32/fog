import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { userContext } from '../contexts/user.context'
import { signOutUser } from '../utils/firebase.utils'
const Header = () => {
  const {currentUser,setCurrentUser} = useContext(userContext)
  console.log(currentUser)
 
  const signOutHandler = async () =>{
    await signOutUser()
    
  }
  return (
    <nav className="navbar">
     <Link to="/" >Home</Link>{
     currentUser ? (<a onClick={signOutHandler}>Sign Out</a>):(
      <Link to="/account/signup" >Sign In</Link>
     )
     }
     
     
     <Link to="/cart" >Cart</Link>
    </nav>
  )
}

export default Header