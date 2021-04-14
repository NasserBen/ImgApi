import React from 'react'
import './Navigation.css'
import Logo from '../Logo/Logo'

const Navigation = ({ onRouteChange }) => {
  return (
    <nav className='nav'>
      <Logo />
    </nav>
  )
}

export default Navigation
