import React from 'react'
import Common from './Common'
import web from "./images/setting.png";
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <>
    <Common
     name="Grow your tech skills with"
     imgsrc={web}
     visit="/service"
     btname="Get Started"
     />
  </>
  )
}

export default Home