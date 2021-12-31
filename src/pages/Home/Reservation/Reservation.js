import { Box, Button, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import './Reservation.css'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import axios from 'axios';



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

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
      console.log(data)
      reset()
      axios.post('/reservation', data)
      .then(res =>{
        
      })
    };

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
                                    <Button sx={{backgroundColor:'#212121', my:5}} variant="contained"><Link to='/reservation' style={{textDecoration:'none', color:'#fff', fontWeight:"500"}} >Book a reservation</Link></Button>
                                </Container>
                            </Grid>
                            <Grid className='reservation-bg1 reservation' sx={{justifyContent:'center', alignItems:'center', display:"flex", mp:{xs:7, sm:'none'}}} item xs={12} sm={6}>
                                <Container>
                                <Box className='add-project' sx={{textAlign:'center'}}>
                                    <Typography variant='h4' color='#fff' sx={{fontWeight:"600", my:5}}>Book a reservation!!</Typography>
                                    <form style={{marginBottom:"5em"}} onSubmit={handleSubmit(onSubmit)}>
                                        <input required placeholder='Name' {...register("name")} />
                                        <input required type='date' {...register("date" )} />
                                        <input placeholder='Number of Seat/Table' {...register("server" )} />
                                        <input placeholder='Any food preferance ' required {...register("img1" )} />
                                        <input style={{cursor:'pointer'}} placeholder='name' type="submit" />
                                    </form>
                                </Box>
                                </Container>
                            </Grid>
                        </Grid>
                </Box>
        </Box>
    );
};

export default Reservation;