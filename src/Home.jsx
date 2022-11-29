import React from 'react'
import Common from './Common'
import web from "./images/web_developing.gif";
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