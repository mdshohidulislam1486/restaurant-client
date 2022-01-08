import { Box, Typography, Container, Button } from '@mui/material';
import React from 'react';
import './Footer.css'
import logo1 from '../../../images/logo/logo1.jpg'
import logo2 from '../../../images/logo/logo2.jpg'
import logo3 from '../../../images/logo/logo3.jpg'
import logo4 from '../../../images/logo/logo5.jpg'
import logo5 from '../../../images/logo/logo6.png'
import { Link } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import DraftsIcon from '@mui/icons-material/Drafts';


const Footer = () => {
    return (
        <Box sx={{mt:10}}>
            <Box >
                <Container>
                <Box sx={{mb:4}}>
                <Typography sx={{textAlign:'center'}} variant='h3' >
                    Our Clients
                </Typography>
                <Typography sx={{textAlign:'center'}} variant='body1'>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum consequatur iure adipisci alias blanditiis harum illo odit ex, ducimus veniam, qui eligendi quas iusto nemo molestias maxime ullam tempore, pariatur numquam in
                </Typography>
                </Box>
                <Box sx={{display:'flex', justifyContent:'center', alignItems:'center', flexWrap:'wrap', mb:4}}>
                    <Box sx={{  display:'flex', justifyContent:'center', alignItems:'center'}}>
                        <Box>
                            <img  style={{margin:'.3em', width:'30px'}} src={logo1} alt="" />
                        </Box>
                        <Typography sx={{mr:2}}>
                            Infinity
                        </Typography>
                    </Box>
                    <Box sx={{  display:'flex', justifyContent:'center', alignItems:'center'}}>
                        <Box>
                            <img  style={{margin:'.3em', width:'30px'}} src={logo2} alt="" />
                        </Box>
                        <Typography sx={{mr:2}}>
                            FoodFanda
                        </Typography>
                    </Box>
                    <Box sx={{  display:'flex', justifyContent:'center', alignItems:'center'}}>
                        <Box>
                            <img  style={{margin:'.3em', width:'30px'}} src={logo3} alt="" />
                        </Box>
                        <Typography sx={{mr:2}}>
                            Organic
                        </Typography>
                    </Box>
                    <Box sx={{  display:'flex', justifyContent:'center', alignItems:'center'}}>
                        <Box>
                            <img  style={{margin:'.3em', width:'30px'}} src={logo4} alt="" />
                        </Box>
                        <Typography sx={{mr:2}}>
                            HotChilli
                        </Typography>
                    </Box>
                    <Box sx={{  display:'flex', justifyContent:'center', alignItems:'center'}}>
                        <Box>
                            <img  style={{margin:'.3em', width:'30px'}} src={logo5} alt="" />
                        </Box>
                        <Typography sx={{mr:2}}>
                            Samco
                        </Typography>
                    </Box>
                </Box>
                </Container>

            </Box>
            <Box sx={{backgroundColor:'#1B1B1B', display:'flex', justifyContent:'center', alignItems:'center', mb:'-20px', p:5 }}>
                <Typography color="#fff" variant='body2'>Have some questions about our food?</Typography>
                <Button sx={{borderRadius:'40%', backgroundColor:'#fff', marginLeft:'1em', padding:'.8em', color:'#000', fontWeight:'700'}}>More About Us</Button>
            </Box>

            <Box className='footer-bg'>
                <Container sx={{display:'flex', flexDirection:{xs:'column', sm:"row"}, justifyContent:{sm:'space-between'}, alignItems:"center", flexWrap:{xm:'wrap'}}}>
              
                <Box sx={{display:'flex', flexDirection:'column', justifyContent:'center', py:5, alignItems:'center'}}>
                    <Typography variant='h6' color='#fff'>
                        COMPANY
                    </Typography>
                    <Link style={{textDecoration:'none', color:'#fff', textTransform:"lowercase"}}  to='/home'><Button color="inherit">Home</Button></Link>
                    <Link style={{textDecoration:'none', color:'#fff'}}  to='/allseafood'><Button color="inherit">Sea Food</Button></Link>
                    <Link style={{textDecoration:'none', color:'#fff'}}  to='categories'><Button color="inherit">Categories</Button></Link>
                </Box>
             

                <Box sx={{display:'flex', justifyContent:'center', flexDirection:'column', alignItems:'center'}}> 
                    <Typography variant='h6' color='#fff'> 
                        CONTACT
                    </Typography>
                    <Typography color='red'>
                        info@chillhouse.com
                    </Typography>
                    <Typography color='#fff'>
                        + 880 1681094634
                    </Typography>
                    <Box sx={{display:'flex', cursor:'pointer'}}>
                        <FacebookIcon sx={{color:'#fff'}}></FacebookIcon>
                        <InstagramIcon sx={{color:'#fff'}}></InstagramIcon>
                        <TwitterIcon sx={{color:'#fff'}}></TwitterIcon>
                        <DraftsIcon sx={{color:'#fff'}}></DraftsIcon>
                    </Box>

                </Box>

                <Box sx={{display:'flex', flexDirection:'column', justifyContent:'center', py:5, alignItems:'center'}}>
                    <Typography variant='h6' color='#fff'>
                        ADDRESS
                    </Typography>
                    <Link style={{textDecoration:'none', color:'#fff', textTransform:"lowercase"}}  to='/home'><Button color="inherit">147/12 Iskaton Road</Button></Link>
                    <Link style={{textDecoration:'none', color:'#fff'}}  to='/allseafood'><Button color="inherit">Noya Paltan </Button></Link>
                    <Link style={{textDecoration:'none', color:'#fff'}}  to='categories'><Button color="inherit">Dhaka</Button></Link>
                </Box>
                </Container>
                <Typography sx={{textAlign:'center', fontSize:'.7em'}} variant='body2' color='#fff'>
                    © All Rights Reserved
                </Typography>
            </Box>
            
        </Box>
    );
};

export default Footer;