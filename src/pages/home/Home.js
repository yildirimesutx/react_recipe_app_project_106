import React from 'react'
import styling from "./Home.module.scss"
import axios from "axios"
import  {useState,useEffect} from "react"
import Header from '../../components/header/Header'

const Home = () => {


const [query, setQuery] = useState("");
const [food, setFood] = useState("");
const mealTypes =["Breakfast", "Lunch", "Dinner", "Snack", "Teatime"]
const [meal, setMeal] =useState(mealTypes[0].toLowerCase())



const APP_ID = 'fa255c54';
const APP_KEY = '58d9e40af297f0ee2f74a36b5d1a9e4b';

const url =`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${meal}`

const getApi = async()=>{
   if(query){
    const result = await axios.get(url)
    setFood(result.data.hits)
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
    />
    </div>
  )
}

export default Home