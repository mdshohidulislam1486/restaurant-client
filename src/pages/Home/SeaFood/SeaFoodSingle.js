import { Box, Grid, Typography } from '@mui/material';
import React from 'react';

const SeaFoodSingle = ({seaFood}) => {

    const {strMeal, strMealThumb} = seaFood
    return (
        <Grid item xs={12} sm={6} md={4}>
            <Box >
            <img width='90%'  src={strMealThumb} alt="" />
            </Box>

            <Typography variant='body1' sx={{fontWeight:'600'}}>
            {strMeal}      
            </Typography>   
        </Grid>
    );
};

export default SeaFoodSingle;