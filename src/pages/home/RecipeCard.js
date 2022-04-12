import React from 'react'
import { useNavigate } from 'react-router'
import styling from "./Home.module.scss"






const RecipeCard = ({recipe, key}) => {


  let navigate = useNavigate();

  const handleMore = ()=>{
    navigate("/details", {state: {recipe}})

    // useNavigate()= bir olay işleyicide veya durumdaki bazı değişikliklere yanıt olarak programlı olarak gezinmenize izin verir. direk butona tıklanınca <Details/> yazamazdık mesela <Header/> gibi, çünkü Details sayfasına bir route atanmış. direk usenavigate i buraya yazarsak extra import yazılmalı, o yüzden function dışında tanımlıyoruz
    // view more tıklandığında o yiyeceğin adıyla detaylarının old sayfaya yönlen. buraya veriler emanet geldi home dan, buradan giderken state e gömerek navigate ile yolluyoruz. recipe=bütün data(label, image, details...)
  }
  // console.log(recipe.ingredientLines)


  return (
    <div className={styling.recipe_card} key={key}>   
     <h3>{recipe.label}</h3>
     <img src={recipe.image} alt="" />
     <button onClick={handleMore}>View More</button>
    </div>
  )
}

export default RecipeCard