import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <nav className='d-flex justify-content-around'>
        <Link to="/login">Login</Link> 
        <Link to="/signup">Signup</Link> 
      </nav>
    </>
  )
}

export default Navbar
