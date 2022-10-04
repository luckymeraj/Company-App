import React from 'react'
import Common from './Common'
import web from "./images/setting.png";
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <>
    <Common
     name="Grow your skills with"
     imgsrc={web}
     visit="/service"
     btname="Enroll Now"
     />
  </>
  )
}

export default Home