import Home from './Home';
import About from './About';
import Service from './Service';
import Contact from './Contact';
// import { Route, Router, Routes } from 'react-router-dom'
import {
  BrowserRouter as Router,
  Route,BrowserRouter,Routes} from "react-router-dom";


function App() {
  return (

    <BrowserRouter>
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
