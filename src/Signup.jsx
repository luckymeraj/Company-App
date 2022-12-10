import React from 'react'
import Common from './Common'
import maintain from "./images/maintain.gif";

const Signup = () => {
  return (
    // <div><h1 style={{textAlign:"center",padding:"4.5em"}}>Site under Construction</h1></div>
<>
<Common
     name="Site under maintainance"
     imgsrc={maintain}
     visit="/contact"
     btname="Help"
     />
</>

    )
}

export default Signup