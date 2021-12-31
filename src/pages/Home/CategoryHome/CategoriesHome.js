import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import './CategoriesHome.css'
import { Container, Typography } from '@mui/material';
import CategoryHome from './CategoryHome';
import useCategories from '../../../Hooks/useCategories/useCategories';



const CategoriesHome = () => {
/* const [foodCategories] = useCategories() */

const [foodCategories, setFoodCategories] =  useState([])

useEffect(()=>{
    fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
    .then(res  => res.json())
    .then(data => setFoodCategories(data.categories))
},[])


    return (
   <Box>
       <Typography variant='h3' sx={{fontWeight:'600', my:8, textAlign:'center'}}>
           Food Categories
       </Typography>
        <Box className='categories-bg' sx={{ flexGrow: 1 }}>
            <Container>
            
            <Grid container spacing={2} sx={{justifyContent:'center', alignItems:'center'}}>
                <Grid item xs={12} sm={5}>
                    <Typography variant='h5' color='#fff' sx={{fontWeight:'700'}}>
                        Types of Food we server at our restaurant
                    </Typography>
                    <Typography variant='body2' color='#fff' sx={{}}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et vero excepturi rerum dolorum optio architecto nesciunt dolorem eveniet quis, nostrum reprehenderit placeat dolor magni qui maiores ducimus ipsam necessitatibus quisquam, laboriosam debitis quidem, consectetur nihil iure quia. Alias, illo doloribus.
                    </Typography>
                    
                
                </Grid>

                <Grid item xs={12} sm={7} >
                    <Box sx={{display:'flex', flexWrap:'wrap', justifyContent:'center', alignItems:'center'}}>
                        {
                        foodCategories.map(newCategory =><CategoryHome key={newCategory.idCategory} newCategory={newCategory}></CategoryHome>).slice(0, 2)
                        }
                    </Box>
                </Grid>
            </Grid>
            </Container>
        </Box>
   </Box>
    );
};

export default CategoriesHome;