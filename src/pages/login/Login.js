import React from 'react'
import styling from "./Login.module.scss"
import meal from "../../assets/meal.svg"

const Login = () => {
  return (
    <div className={styling.container}>
    <div className={styling.main}>
   <img src={meal} alt="meal" />
   <h1>{`<Clarusway>`} Recipe</h1>
    </div>
    </div>
  )
}

export default Login