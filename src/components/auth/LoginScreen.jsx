import React from 'react'
import { Link } from 'react-router-dom'
import { RegisterScreen } from './RegisterScreen'

export const LoginScreen = () => {
  return (
    <>
      <h3 className='auth_title'>Login</h3>
      <form>
        <input 
          type="email" 
          placeholder='email'
          name='email'
          className='auth_input'
          autoComplete='off'
        />
        <input 
          type="password" 
          placeholder="password"
          name="password" 
          className='auth_input'
          autoComplete='off'
          />
          <button
            type="submit"  
            className='auth_button'
          >
            Login
          </button>
          <hr />
          <div> <p> Login with social network</p> </div>
          <Link to="/auth/register">You don't have an account?</Link>
      </form>
    </>
  )
}
