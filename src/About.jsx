import React from 'react'
import about from "./images/setting.png";
import { NavLink } from "react-router-dom";
import Common from "./Common";
import Service from './Service';
const About = () => {

  return (
<>

    <Common
   
      name="Welcome to"
      imgsrc={about}
      visit="/contact"
      btname="Request a Call"
    
    />
<Service/>

</>

    )
}

export default About