import React from 'react'
import dietSvg from "../../assets/diet.svg";
import { useLocation } from 'react-router-dom'
import styling from "./Details.module.scss"

const Details = () => {

    const location = useLocation();

    // geçerli URL'yi temsil eden konum nesnesini döndürür

    const recipe1 = location.state.recipe;

    // navigate("/details", { state: { recipe } }); recipecard da bütün data json formatında state e gömülmüştü 

    console.log(recipe1);
  return (
    <div className={styling.genel}>
        <div className={styling.title}>
      <h1> {recipe1.label}</h1>
      <img src={dietSvg} alt="" />
      </div>
      <div className={styling.card_box}>
      <div>
          <img src={recipe1.image} alt="" />
      </div>
     <div className={styling.text}>
       {recipe1.ingredientLines.map((e, index)=>(
           <li key={index}>
                {e}
           </li>
       ))}
     </div>
     </div>
    </div>
  )
}

export default Details