import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import { useTheme } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';


const Header = () => {

const theme = useTheme()
const useSTyle = makeStyles({
    navItem:{
        color:'#fff',
        textDecoration:'none'
    },
    navIcon:{
        [theme.breakpoints.up('sm')]: {
            display:'none !important',
        }
        
    },
    navItemContainer:{
        [theme.breakpoints.down('sm')]: {
            display:'none !important',
        }
        
    },
    logoRight:{
        [theme.breakpoints.down('sm')]: {
            textAlign:'right',
        }
        
    },
    mobileNav:{
        textDecoration:'none',
        color:'#fff'
    }, 
    divider:{
        backgroundColor:'#fff'
    }


})

const {navItem, navIcon, navItemContainer, logoRight, mobileNav, divider} = useSTyle()

        const [state, setState] = React.useState(false)

    
        const list =(
            <Box
            sx={{ width:250, backgroundColor:'#1B1B1B' }}
            role="presentation"
           
            >
            <List>
              
                <ListItem>
                    <Link to='/home' className={mobileNav}><ListItemText>Home</ListItemText></Link>
                </ListItem>
                <Divider className={divider}/>
                <ListItem>
                    <Link to='/about' className={mobileNav}><ListItemText>About</ListItemText></Link>
                </ListItem>
                <Divider className={divider} />
                <ListItem>
                    <Link to='/foods' className={mobileNav}><ListItemText>Foods</ListItemText></Link>
                </ListItem>
            </List>
            <Divider  className={divider}/>
            </Box>
        );

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{backgroundColor:'#1B1B1B'}}>
                <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                    onClick={()=> setState(true)}
                   
                >
                    <MenuIcon  className={navIcon} />
                </IconButton>
                <Typography className={logoRight} variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    News
                </Typography>
                <Box className={navItemContainer}>
                    <Link className={navItem} to='/home'><Button color="inherit">Home</Button></Link>
                    <Link className={navItem} to='/about'><Button color="inherit">About</Button></Link>
                    <Link className={navItem} to='/foods'><Button color="inherit">Foods</Button></Link>
                </Box>
                </Toolbar>
            </AppBar>
            </Box>

            <div>
            
            <React.Fragment >
                <Drawer
                open={state}
                onClose={()=> setState(false)}
                
                >
                {list}
                </Drawer>
            </React.Fragment>
            </div>
        </>
    );
};

export default Header;