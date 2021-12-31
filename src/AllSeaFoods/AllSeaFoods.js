import React from 'react';
import useFoods from '../Hooks/useFoods/useFoods';
import AllSeaFood from './AllSeaFood';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';

const AllSeaFoods = () => { 
    const [seafoods] = useFoods()
    return ( 

<>


    <Container >
        <Box sx={{textAlign:'center', my:6}}>
        <Typography variant='h4' sx={{fontWeight:'700', textAlign:'center', mb:3}}>Sea Food Dishes</Typography>
        <Typography variant='body1'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio accusamus eius commodi voluptatum praesentium blanditiis est alias ipsum libero. Ab tempore quisquam numquam tenetur reprehenderit quod, vero assumenda laudantium. Veritatis voluptatibus iste deserunt aperiam libero dignissimos neque corrupti, vitae corporis.
        </Typography>
        </Box>
        <Box container spacing={2} sx={{  justifyContent:'center', alignItems:'center', display:'flex', flexWrap:'wrap',  }}>
          {
                seafoods.map(seafood =><AllSeaFood key={seafood.idMeal} seafood={seafood}></AllSeaFood>)
            }
        </Box>
      </Container>
       
        </>
    );
};

export default AllSeaFoods;