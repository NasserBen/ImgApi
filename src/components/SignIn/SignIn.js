import React from 'react'
import './SignIn.css'

const SignIn = ({ onRouteChange }) => {
  const signIn = event => {
    event.preventDefault()
    return onRouteChange('home')
  }
  const Register = event => {
    event.preventDefault()
    return onRouteChange('register')
  }

  return (
    <div className='signIn'>
      <div className='loginContainer'>
        <h1>Sign In</h1>
        <form>
          <p>Email</p>
          <input type='text' />
          <p>Password</p>
          <input type='password' />
          <button className='signInBtn' onClick={signIn}>
            Sign in
          </button>
          <button className='registerBtn' onClick={Register}>
            Register
          </button>
        </form>
      </div>
    </div>
  )
}

export default SignIn
