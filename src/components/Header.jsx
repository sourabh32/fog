import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <nav className="navbar">
     <Link to="/" >Home</Link>
     <Link to="/account" >Account</Link>
     <Link to="/cart" >Cart</Link>
    </nav>
  )
}

export default Header