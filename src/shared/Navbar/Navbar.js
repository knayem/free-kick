import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';
//import logo from '../../images/logo.png'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';



const Navbar = () => {

  const {cartItems}=useSelector(state=> state.cartReducer);
    return (
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            {/* <Typography variant="h6" component="div" sx={{ flexGrow: 1, mt:1}}>
            <img style={{ width:"60px", height:"60px" }} src={logo} alt="" className="img-fluid" />
            </Typography> */}
            
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              
            </Typography>
            
            

            <Link to="/cart" underline="none">
            
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Cart <ShoppingCartTwoToneIcon/> {cartItems.length}
            </Typography>
            </Link>
            <Link to="/admin" underline="none">
            
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Admin
            </Typography>
            </Link>
            <Button to="/admin" color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </Box>
    );
};

export default Navbar;