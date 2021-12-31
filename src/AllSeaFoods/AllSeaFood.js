import { Grid } from '@mui/material';
import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const AllSeaFood = ({seafood}) => {
    const {strMeal, strMealThumb } = seafood
    return (
      
            <Card sx={{ width: 345 , margin:2}}>
                <CardMedia
                    component="img"
                    height="140"
                    image={strMealThumb}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="body2" 
                    sx={{fontWeight:'600'}}
                    component="div">
                    {strMeal}
                    </Typography>
               
                </CardContent>
                <CardActions>
                    <Button size="small">Order Now</Button>
                </CardActions>
            </Card>
    );
};

export default AllSeaFood;