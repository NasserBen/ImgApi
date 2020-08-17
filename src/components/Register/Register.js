import React from 'react'
import '../SignIn/SignIn.css'

const Register = ({ onRouteChange }) => {
  const Register = event => {
    event.preventDefault()
    return onRouteChange('home')
  }
  const signIn = event => {
    event.preventDefault()
    return onRouteChange('signIn')
  }

  return (
    <div className='signIn'>
      <div className='loginContainer'>
        <h1>Register</h1>
        <form>
          <p>Name</p>
          <input type='text' />
          <p>Email</p>
          <input type='text' />
          <p>Password</p>
          <input type='password' />
          <button className='signInBtn' onClick={Register}>
            Register
          </button>
          <button className='registerBtn' onClick={signIn}>
            Sign In
          </button>
        </form>
      </div>
    </div>
  )
}

export default Register
