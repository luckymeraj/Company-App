import React from 'react'
import Common from './Common'
import web from "./images/setting.png";
import { NavLink } from 'react-router-dom'
import Service from './Service';

const Home = () => {
  return (
    <>
    
    <Common
     name="Grow your skills with"
     imgsrc={web}
     visit="/courses"
     btname="Enroll Now"
     />
     <Service/>
  </>
  )
}

export default Home