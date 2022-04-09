import React from 'react'
import styling from "./Form.module.scss"

const Form = ({setMeal, setQuery, getApi, mealTypes, query}) => {

  const handleSubmit=(e)=>{
    e.preventDefault()
    getApi()
  }
  return (

    <div className={styling.form_bar}>
        <form className={styling.form} action="" onSubmit={handleSubmit} >
          
        <input type="text" placeholder='Search' value={query} onChange={(e)=>setQuery(e.target.value)}/>


        <button  onClick={getApi} type='submit'>Search</button>

        <select name="mealTypes" id="mealTypes" onChange={(e)=>setMeal(e.target.value)} >
          {
          mealTypes.map((item, index)=> <option key={index} value={item.toLowerCase()}>{item}</option>)
        }
        </select>       
        </form>  
    </div>
  )
}

export default Form