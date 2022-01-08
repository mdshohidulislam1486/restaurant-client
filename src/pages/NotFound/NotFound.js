import { Box, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import './NotFounc.css'

const NotFound = () => {
    return (
        <Box sx={{ textAlign:'center'}} className='not-found-bg'>
            <Link style={{textDecoration:'none', marginTop:"30em"}} to='/home'>
             <Typography variant='h4' color='#fff'>Page might be uder construction</Typography>
             <Typography variant='h4' color='#fff'>Back to Home</Typography>
            </Link>
        </Box>
    );
};

export default NotFound;