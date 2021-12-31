import { useEffect, useState } from "react"

const useFoods = ()=>{
const [seafoods, setSeafoods] = useState([])


useEffect(()=>{
fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=seafood')
.then(res => res.json())
.then(data => setSeafoods(data.meals))
}, []);


return [seafoods]
}

export default useFoods;