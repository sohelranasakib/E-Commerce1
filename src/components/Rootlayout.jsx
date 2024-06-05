import React from 'react'
import Header from './Header'
import Navber from './Navber'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'


const Rootlayout = () => {
  return (
    <>
    <Header/>
    <Navber/>
    <Outlet/>
    <Footer/>
    </>
   
   
  )
}

export default Rootlayout