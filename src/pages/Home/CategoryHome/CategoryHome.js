import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const CategoryHome = ({newCategory}) => {
    const {strCategory, strCategoryThumb, strCategoryDescription} = newCategory
    return (
    <Card sx={{ maxWidth: 300, m:2 }}>
      <CardMedia
        component="img"
        height="140"
        image={strCategoryThumb}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {strCategory}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {strCategoryDescription.slice(0, 100)}
        </Typography>
      </CardContent>
      <CardActions>
       
        <Button size="small">Browse Categories</Button>
      </CardActions>
    </Card>
    );
};

export default CategoryHome;