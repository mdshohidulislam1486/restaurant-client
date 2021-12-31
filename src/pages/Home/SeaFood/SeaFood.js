import React from 'react';
import './SeaFood.css'
import useFoods from '../../../Hooks/useFoods/useFoods';
import { Box, Button, Container, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import SeaFoodSingle from './SeaFoodSingle';
import { Link } from 'react-router-dom';




const SeaFood = () => {
    const [seafoods] =useFoods()
    return (
        <Box >
            <Container>
                <Box  sx={{mt:7}}>
                <Typography variant='h3' sx={{textAlign:'center', fontWeight:'700'}}>
                    Our Sea Food Dish 
                </Typography>
                <Typography>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis, voluptates enim accusamus quia aliquid voluptate recusandae commodi aliquam natus facilis? Animi aperiam provident nobis rerum cumque repudiandae suscipit. Rerum voluptatum quidem voluptas amet fugiat! Error autem fugiat ducimus vel ad?
                </Typography>
                </Box>

            <Grid sx={{ width: '100%', justifyContent:'center',my:5 , alignItems:"center", textAlign:"center"}} container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                
                {
                    seafoods.map(seaFood => <SeaFoodSingle seaFood={seaFood} key={seaFood.idMeal}></SeaFoodSingle>).slice(0, 3)
                }
            </Grid>
            <Box sx={{textAlign:'center'}}>
                <Button >
                    <Link style={{textDecoration:'none'}} to='/allseafood'>Visit Our Sea Food Section</Link>
                </Button>
            </Box>
            </Container>
        </Box>
    );
};

export default SeaFood;