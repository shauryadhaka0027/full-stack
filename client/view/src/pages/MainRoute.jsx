import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import SignUp from './SignUp'
import Login from './Login'
import Home1 from './Home1'
import User from './User'
import Cartt from './Cartt'
import Payment from './Payment'
import Navabar from '../components/Navabar'

const MainRoute = () => {
  return (
    <div>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path='/home'   element={<Home1/>} />
      <Route path='/user/:product_id'   element={<User/>} />
      <Route path="/register"  element={<SignUp/>} />
      <Route path="/login"  element={<Login/>} />
      <Route path="/cart"  element={<Cartt/>} />
      <Route path="/pay"  element={<Payment/>} />
      <Route path="/nav"  element={<Navabar/>}/>      

      </Routes>
    </div>
  )
}

export default MainRoute
