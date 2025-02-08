import React from 'react'
import Header from '../header/Header'
import { Outlet } from 'react-router-dom'
import Nav from '../nav/Nav'
import Course from '../course/Course'
// import Course from '../course/Course'

const HomeLayout = () => {
  return (
    <>
    <Nav/>
    <Outlet/>
    <Course/>
    </>
  )
}

export default HomeLayout