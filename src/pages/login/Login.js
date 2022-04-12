import React from 'react'
import styling from "./Login.module.scss"
import meal from "../../assets/meal.svg"

const Login = () => {


const user= {
  username:"user"
}

const handleSubmit= (e)=>{
    e.preventDefault();


    sessionStorage.setItem("user", JSON.stringify(user))

    window.location.href ="/home";
    // bu bölümü link ile de yapabiliriz
}




  return (
    <div className={styling.container}>
    <div className={styling.main}>
   <img src={meal} alt="meal" />
   <h1>{`< Chef Mesut>`} Recipe</h1>
   <form  onSubmit={handleSubmit} className={styling.login} action="">
      <input className={styling.name} type="text" placeholder="USERNAME" required  />
      <input  className={styling.name}type="password" placeholder="PASSWORD" required />
      <button className={styling.buton} type="submit">LOGIN</button>
    </form>
    </div>
    </div>
  )
}

export default Login