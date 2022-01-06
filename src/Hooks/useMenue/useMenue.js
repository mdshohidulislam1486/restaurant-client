import { useEffect, useState } from "react";



const useMenue = ()=>{

    const [ourMenues, setOurMenues] =  useState([])

    useEffect(()=>{
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?s')
        .then(res  => res.json())
        .then(data => setOurMenues(data.meals))
    },[])

    return[ ourMenues, setOurMenues]

}


export default useMenue;