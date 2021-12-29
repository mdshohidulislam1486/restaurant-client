import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import './Reservation.css'
import plater1 from '../../../images/reservation/plater1.png'
import plater2 from '../../../images/reservation/plater2.png'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';


const itemData = [
    {
      img: 'https://i.ibb.co/2gGZWrV/plater1.png',
      title: 'Breakfast',
      author: '@bkristastucchio',
      rows: 2,
      cols: 2,
      featured: true,
    },
    {
      img: 'https://i.ibb.co/0Qkgsdd/plater2.png',
      title: 'Burger',
      author: '@rollelflex_graphy726',
    },
    
  ];


const Reservation = () => {
    return (
        <Box sx={{mt:7}}>   
        
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2} > 
                            <Grid  className='reservation-bg reservation' item xs={12} sm={6}>
                                <Container>
                                    <Typography variant='h3' sx={{fontFamily:'cursive', my:7, }} color="#FFF">
                                        Let's set a Reservation
                                    </Typography>
                                    <Typography variant='body2' sx={{fontFamily:'cursive'}} color="#FFF">
                                       Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci soluta alias odio doloribus, eius optio laudantium culpa! Velit rerum esse expedita. Inventore ex repellat, ipsa commodi dolor fugiat temporibus sunt, provident fuga voluptate odio accusamus excepturi porro mollitia voluptates blanditiis dolores libero, nesciunt quo voluptatem doloribus ut magni fugit. Fuga.
                                    </Typography>
                                    <Box >
                                        {/* <Box sx={{width:'50%', heightL:'100%', position:'relative'}}>
                                            <img width={{width:'100%'}} src={plater1} alt="plater" />
                                        </Box>
                                        <Box sx={{width:'50%', position:'relative'}}>
                                            <img  width={{width:'100%', position:'absolute'}} src={plater2} alt="plater" />
                                        </Box> */}
                                        <ImageList sx={{ width:'100%' }}>
                                            
                                            {itemData.map((item) => (
                                                <ImageListItem key={item.img}>
                                                <img
                                                    src={`${item.img}?w=248&fit=crop&auto=format`}
                                                    srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                                    alt={item.title}
                                                    loading="lazy"
                                                />
                                               
                                                </ImageListItem>
                                            ))}
                                        </ImageList>
                                    </Box>
                                </Container>
                            </Grid>
                            <Grid className='reservation-bg1 reservation' item xs={12} sm={6}>
                                <Container>
                                    <Typography variant='h2' color="#fff">
                                           
                                    </Typography>
                                </Container>
                            </Grid>
                        </Grid>
                </Box>
        </Box>
    );
};

export default Reservation;