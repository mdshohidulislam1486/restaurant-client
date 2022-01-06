import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import chef from '../../../images/banner/chef.png'
import { Button, Container, Typography } from '@mui/material';
import './Banner.css'
import { Link } from 'react-router-dom';



const Banner = () => {
    return (
        <Box>
            <Box className='banner-bg'>
                <Container sx={{ display:"flex", justifyContent:'center'}}>
                    <Box  sx={{ flexGrow: 1, display:"flex", justifyContent:'', alignItems:'center'}}>
                    <Grid spacing={5} sx={{alignItems:'center', flexWrap:'wrap', display:'flex', justifyContent:{xs:'center', md:'space-between'}}}>
                    <Grid item xs={12} md={6}>
                            <Typography variant='h3' color='#F2F3F5'>
                                Chill House
                            </Typography>
                            <Typography variant='body1' color="#F2F3F5">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium doloribus cum ex, repellat cumque ipsa exercitationem enim tenetur omnis, hic ab veniam nobis numquam officia fugit repudiandae reiciendis quos quasi inventore. Tempore quasi nulla fugit porro, dolores dolorem? Ipsa quam deserunt reiciendis eum aliquam? Dolores, animi pariatur. Maxime, reprehenderit tempore!
                            </Typography>
                            <Button sx={{backgroundColor:'#212121', my:5}} variant="contained"><Link to='/reservation' style={{textDecoration:'none', color:'#fff', fontWeight:"500"}} >Our Menues</Link></Button>

                        </Grid>
                        <Grid item xs={12} md={6}>
                        <Box sx={{position:''}}>
                        <img style={{position:'', width:'70%'}} src={chef} alt="chef" />
                        </Box>
                        </Grid>
                        
                    </Grid>
                    </Box>

                </Container>
            </Box>
        </Box>
    );
};

export default Banner;