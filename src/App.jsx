import React, { useEffect } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';

import Home from './Home';
import About from './About';
import Service from './Service';
import Mentors from './Mentors';
import Contact from './Contact';
import Navbar from './Navbar';
import Footer from './Footer';
import Signup from './Signup';

// import { Route, Router, Routes } from 'react-router-dom'
import {
  BrowserRouter as Router,
  Route, BrowserRouter, Routes
} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { getUsersDetails } from './redux/actions/getUsersDetails';
import { getUsersDetailsAll } from './redux/actions/getUsersDetailsAll';


function App() {
  const dispatch=useDispatch()
  const STORE=useSelector(state=>state)

  useEffect(()=>{
dispatch(getUsersDetails(10))
dispatch(getUsersDetailsAll())
console.log('face',localStorage)
  },[])
  console.log('STORE',STORE)
  return (

    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/*' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/courses' element={<Service />} />
        <Route path='/mentors' element={<Mentors />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/signup' element={<Signup />} />



      </Routes>
      <Footer />
    </BrowserRouter>

  );
}

export default App;
