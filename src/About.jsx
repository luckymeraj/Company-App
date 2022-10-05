import React from 'react'
import about from "./images/aboutImg2.png";
import { NavLink } from "react-router-dom";
import Common from "./Common";
const About = () => {
  return (
    <Common
   
      name="Welcome to"
      imgsrc={about}
      visit="/contact"
      btname="Request a Call"
    
    />

    )
}

export default About