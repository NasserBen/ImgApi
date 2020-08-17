import React from 'react'
import './Navigation.css'
import Logo from '../Logo/Logo'

const Navigation = ({ onRouteChange }) => {
  return (
    <nav className='nav'>
      <Logo />
      <p onClick={() => onRouteChange('signIn')}>Sign Out</p>
    </nav>
  )
}

export default Navigation
