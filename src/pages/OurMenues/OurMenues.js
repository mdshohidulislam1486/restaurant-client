import { SearchOutlined } from '@mui/icons-material';
import { Box, Container, IconButton, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import useMenue from '../../Hooks/useMenue/useMenue';
import OurMenue from './OurMenue';




const OurMenues = () => {

const [searchText, setSearchText] = useState('')
const [ourMenues, setOurMenues] =useMenue()

useEffect(()=>{
    const url =`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    fetch(url)
    .then(res => res.json())
    .then(data => data.meals)

}, [])

const handleSearchField = e =>{
    const searchFood = e.target.value;
    setSearchText(searchFood)
}

    return (
        <Box>
            <Box sx={{textAlign:"center", my:5}}>
            <TextField
                onChange={handleSearchField}
                sx={{width:'50%'}}
                fullWidth
                id="standard-bare"
                variant="outlined"
                placeholder="Find your menue"
                InputProps={{
                  endAdornment: (
                    <IconButton>
                      <SearchOutlined />
                    </IconButton>
                  ),
                }}
              />
            </Box>
            <Box>
                <Container sx={{display:'flex', justifyContent:'center', alignItems:'center', flexWrap:'wrap' }}>
                    {
                        ourMenues?.map(menue =><OurMenue
                        key={menue.idMeal}
                        menue={menue}
                        >

                        </OurMenue>)
                    }
                </Container>
            </Box>
        </Box>
    );
};

export default OurMenues;