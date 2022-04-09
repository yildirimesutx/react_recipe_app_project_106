import React from 'react'
import styling from "./Home.module.scss"






const RecipeCard = ({recipe, key}) => {

  
  return (
    <div key={key}>
        
     <h3>{recipe.label}</h3>
     <img src={recipe.image} alt="" />
    
    </div>
  )
}

export default RecipeCard