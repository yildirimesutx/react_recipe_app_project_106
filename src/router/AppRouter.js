import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from '../components/navbar/Navbar'
import About from '../pages/about/About';
import Details from '../pages/details/Details';
import Home from '../pages/home/Home'
import Login from '../pages/login/Login';
import PrivateRouter from './PrivateRouter';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <div>
        <Routes>
            <Route path="/" element={<Login/>}/>
    
            <Route path='/about' element={<PrivateRouter/>}>
            <Route path="/about" element={<About/>}/>
            </Route>

           <Route path='/home' element={<PrivateRouter/>}>
            <Route path="/home" element={<Home/>}/>
            </Route>
        </Routes>
        </div>  
    </BrowserRouter>

  )
}

export default AppRouter