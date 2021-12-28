import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import item1 from '../../../images/item/item (1).png'
import item2 from '../../../images/item/item (2).png'
import item3 from '../../../images/item/item (3).png'

const Discount = () => {
    return (
        <Box>
        <Container >
        
        <Box sx={{mt:7}}>
            <Typography variant='h2' sx={{textAlign:'center', color:'#1B1B1B', fontWeight:'600'}}>
                Let's see what's going on!

            </Typography>
            <Typography variant='body1' color='#1B1B1B' sx={{width:'60%,', textAlign:'center', mt:4}}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus aliquid cumque perspiciatis atque eos est pariatur molestiae nihil. Repudiandae, ea eius odit cumque impedit, cupiditate culpa eveniet, molestiae distinctio et quo! Labore quis non dolorem rerum totam vitae. Ratione, animi?

            </Typography>
        </Box>
        <Box sx={{ flexGrow: 1, display:'flex', justifyContent:'center' }} >
            <Grid container spacing={2} sx={{display:'flex', justifyContent:'center', margin:'0 auto'}}>
                <Grid item xs={12} md={4} sx={{textAlign:'center'}} >
                    <img width='80%' src={item2} alt="foodDiscount" />
                </Grid>
                <Grid  item xs={12} md={4} sx={{textAlign:'center'}}>
                    <img width='80%' src={item3} alt="foodDiscount" />
                </Grid>
                <Grid  item xs={12} md={4} sx={{textAlign:'center'}}>
                    <img  width='80%' src={item1} alt="foodDiscount" />
                </Grid>
            </Grid>
        </Box>

        </Container>
        </Box>
    );
};

export default Discount;