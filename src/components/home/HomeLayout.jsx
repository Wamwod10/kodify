import React from 'react'
import Header from '../header/Header'
import { Outlet } from 'react-router-dom'
import Nav from '../nav/Nav'

const HomeLayout = () => {
  return (
    <>
    <Nav/>
    <Outlet/>
    </>
  )
}

export default HomeLayout