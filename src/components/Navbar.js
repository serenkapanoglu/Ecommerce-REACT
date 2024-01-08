import React from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCart } from 'phosphor-react'
import './Navbar.css'
function Navbar() {
  return (
    <div className='navbar'>
      <div className='links'>
      <Link to='/'>Shop</Link>
      <Link to='cart'><ShoppingCart size={34} /></Link>
      </div>
    </div>
  )
}

export default Navbar
