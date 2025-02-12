import React from 'react'
import Header from '../header/Header'
import { Outlet } from 'react-router-dom'
import Nav from '../nav/Nav'
import Course from '../course/Course'
import Section from '../section/Section'
// import Course from '../course/Course'

const HomeLayout = () => {
  return (
    <>
    <Nav/>
    <Outlet/>
    <Section/>
    <Course/>
    </>
  )
}

export default HomeLayout