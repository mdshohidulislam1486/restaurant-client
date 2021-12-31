import { Box, Container } from '@mui/material';
import React from 'react';
import useCategories from '../../Hooks/useCategories/useCategories';
import Category from './Category';



const Categories = () => {
    const [foodCategories] = useCategories()
    
    return (
        <>
        <Box>
            <Container sx={{display:'flex', flexWrap:'wrap', justifyContent:'center'}}>
                {
                    foodCategories.map(category => <Category key={category.idCategory} 
                    category={category}
                    ></Category>)
                }
            </Container>

        </Box>

        </>
    );
};

export default Categories;