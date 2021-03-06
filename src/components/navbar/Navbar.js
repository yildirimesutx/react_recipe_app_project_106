import React from 'react'
import {Link} from "react-router-dom";
import styling from "./Navbar.module.scss"

const Navbar = () => {
  return (
    <div className={styling.navbar}>
       <div className={styling.home}>

       <Link to="/home"> <span className={styling.span}>{`<Chef Mesut's>`}</span>  <span>recipes</span> </Link> 
       </div>


       <div className={styling.about_login}>
       <Link to="/about">About</Link>

       <a href="https://github.com/yildirimesutx" target="_blank">Github</a>
       
       <Link  onMouseUp={() => sessionStorage.clear()} to="/">Logout</Link>
       </div> 
    </div>
  )
}

export default Navbar