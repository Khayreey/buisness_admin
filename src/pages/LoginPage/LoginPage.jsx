import React from 'react'
import './loginStyle.css'
import Banner from '../../component/Banner/Banner'
import Login from '../../component/Login/Login'
const LoginPage = () => {
  return (
    <div className='authBackground'>
       <Banner />
       <Login />
    </div>
  )
}

export default LoginPage