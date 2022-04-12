import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from '../components/navbar/Navbar'
import About from '../pages/about/About';
import Details from '../pages/details/Details';
import Home from '../pages/home/Home'
import Login from '../pages/login/Login';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <div>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path='/details' element={<Details/>}/>
        </Routes>
        </div>  
    </BrowserRouter>

  )
}

export default AppRouter