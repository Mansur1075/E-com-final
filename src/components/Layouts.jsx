import React from 'react'
import Hedar from './Hedar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
import Nevbar from './Nevbar'

const Layouts = () => {
  return (
    <>
    <Hedar/>
    <Nevbar/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Layouts