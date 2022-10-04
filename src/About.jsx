import React from 'react'
import web from "./images/setting.png";
import { NavLink } from "react-router-dom";
import Common from "./Common";
const About = () => {
  return (
    <Common
   
      name="Welcome to"
      imgsrc={web}
      visit="/contact"
      btname="Request a Call"
    
    />

    )
}

export default About