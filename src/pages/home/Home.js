import React from 'react'
import styling from "./Home.module.scss"
import axios from "axios"
import  {useState,useEffect} from "react"
import Header from '../../components/header/Header'
import RecipeCard from './RecipeCard'
import homeImg from '../../assets/home.svg'


const Home = () => {


const [query, setQuery] = useState("");
const [food, setFood] = useState();
const mealTypes =["Breakfast", "Lunch", "Dinner", "Snack", "Teatime"]
const [meal, setMeal] =useState(mealTypes[0].toLowerCase())



const APP_ID = 'fa80e48b';
const APP_KEY = 'db5bd312266eb14db10e3c2df085360e';

const url =`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${meal}`

const getApi = async()=>{
   if(query){
    const result = await axios.get(url)
    setFood(result.data.hits)
   console.log(result.data.hits)
   }else{
     alert("please fill the form")
   }
   
}
  return (
    <div>
    <Header  setQuery={setQuery}
             getApi={getApi}
             mealTypes={mealTypes}
             setMeal={setMeal}
             query={query}
    /> 
   
    <div>
{
   food ? (
    <div> 
{food.map((recipe,index)=>(
<RecipeCard recipe={recipe.recipe} key={index} />
))}
     </div>   
   ):( <img src={homeImg} alt="" />)
}
    </div>
    </div>
  )
}

export default Home