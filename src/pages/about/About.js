import React from 'react'
import aboutLogo from "../../assets/coding.svg"
import styling from "./About.module.scss"

const About = () => {
  return (
    <div className={styling.big_box}>
    <img className={styling.about_logo} src={aboutLogo} alt="logo" />
     <h1 className={styling.text}>About Software Developer <span className={styling.name}> Mesut</span> </h1>
     <div className={styling.text_box}>
      <h2>Hi, I'am Mesut</h2>
      <h3>I’m currently learning Full-Stack Development Languages.</h3>
      <h3>I know JS, ReactJS, Django, NodeJS, MongoDB,SQL, Python, AWS Services.</h3>
      <h3><a href="mailto:yildirimesutcw@gmail.com">Send email</a> : yildirimesutcw@gmail.com</h3>

     </div>
    
    
        
   </div>
  )
}

export default About