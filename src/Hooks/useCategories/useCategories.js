import { useEffect, useState } from "react";



const useCategories = ()=>{

    const [foodCategories, setFoodCategories] =  useState([])

    useEffect(()=>{
        fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
        .then(res  => res.json())
        .then(data => setFoodCategories(data.categories))
    },[])

    return[foodCategories]

}


export default useCategories;