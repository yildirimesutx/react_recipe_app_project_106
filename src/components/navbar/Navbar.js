import React from 'react'
import {Link} from "react-router-dom";
import styling from "./Navbar.module.scss"

const Navbar = () => {
  return (
    <div className={styling.navbar}>
       <div className={styling.home}>
       <Link to="/">Clarusway recipe</Link> 
       </div>
       <div className={styling.about_login}>
       <Link to="/about">About</Link> 
       <a href="https://github.com/yildirimesutx" target="_blank">Github</a>
       <Link to="/login">Logout</Link>
       </div> 
    </div>
  )
}

export default Navbar