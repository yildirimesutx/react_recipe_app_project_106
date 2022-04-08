import React from 'react'
import Form from "./Form"

const Header = ({setMeal, setQuery, getApi, mealTypes}) => {
  return (
    <div>
        <h1>Food App</h1>
     <Form  
          setQuery={setQuery}
          getApi={getApi}
          mealTypes={mealTypes}
          setMeal={setMeal}
     
     />



    </div>
  )
}

export default Header