import React from 'react'
import styling from "./Home.module.scss"
import axios from "axios"
import  {useState,useEffect} from "react"

const Home = () => {


const [recipe, setRecipe] = useState([]);



const APP_ID = 'fa255c54';
const APP_KEY = '864a82802664a50366c68f2ca424dad1';

let query = "pizza"

let meal = "meal"

const url =`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${meal}`

const getApi = async()=>{
   const res = await axios.get(url).then((res)=>{
    console.log("bir",res.data)
    })
  
}

// const getApi = async () =>{ 
//   const response = await axios(url)
//   console.log(response.data)
//    }

  //  fetch(url)
  //   .then((res) => res.json())
  //   .then((json) => setProducts(json.data.data.hits));


useEffect(() => {
 getApi() 
}, []);







  return (
    <div>
      <h1>Food App</h1>



    </div>
  )
}

export default Home