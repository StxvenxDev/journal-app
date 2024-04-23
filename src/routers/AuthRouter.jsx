import React from 'react'
import {
  Route,
  Routes
} from 'react-router-dom';
import {LoginScreen} from '../components/auth/LoginScreen.jsx'
import {RegisterScreen} from '../components/auth/RegisterScreen.jsx'
export const AuthRouter = () => {
  return (
    <div className='auth_main'>
      <div className='auth__box-container'>
        <Routes >
          <Route path='/login' element={<LoginScreen />} />
          <Route path='/register' element={<RegisterScreen />} />
          <Route path='*' element={<LoginScreen />} />
        </Routes>
      </div>
    </div>
  )
}
