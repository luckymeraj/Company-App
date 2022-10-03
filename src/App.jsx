import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';

import Home from './Home';
import About from './About';
import Service from './Service';
import Contact from './Contact';
import Navbar from './Navbar';
// import { Route, Router, Routes } from 'react-router-dom'
import {
  BrowserRouter as Router,
  Route,BrowserRouter,Routes} from "react-router-dom";


function App() {
  return (

    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/home' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/service' element={<Service/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/*' element={<Home/>} />


    </Routes>
    </BrowserRouter>

  );
}

export default App;