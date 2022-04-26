import React, { useContext } from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';

import AccountCircle from '@mui/icons-material/AccountCircle';

import MoreIcon from '@mui/icons-material/MoreVert';
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
//import logo from '../../images/logo.png'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { UserContext } from '../../../src/App';


const Navbar = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <h6 style={{ color: 'blue',marginRight: '10px' }}>{loggedInUser.name || loggedInUser.displayName || loggedInUser.email}</h6>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>

      <Link to="/cart" underline="none">
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          
            <ShoppingBagIcon  />
        
        </IconButton>
        <p>Cart</p>
        </Link>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
         
          color="inherit"
        >
        
            <AdminPanelSettingsIcon />
         
        </IconButton>
        <p></p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );



  const {cartItems}=useSelector(state=> state.cartReducer);
    return (

      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            <h3> Free Kick</h3>
           
          </Typography>
          
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>

          <Link to="/cart" underline="none"> 
            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={cartItems.length} color="error">
              <ShoppingBagIcon style={{width: '40px', height: '35px'}} color="action" sx={{ color: "#fff" }} />
              </Badge>
            
            </IconButton>
            </Link> 
           

            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
              <Badge  color="error">
              <Link to="/admin" underline="none"> 
                <AdminPanelSettingsIcon style={{width: '40px', height: '35px'}}    />
                </Link> 
              </Badge>
            </IconButton>
          
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
              
            >
              <AccountCircle />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
              
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>



      //   <Box sx={{ flexGrow: 1 }}>
      //   <AppBar position="static">
      //     <Toolbar>
      //       <IconButton
      //         size="large"
      //         edge="start"
      //         color="inherit"
      //         aria-label="menu"
      //         sx={{ mr: 2 }}
      //       >
      //         <MenuIcon />
      //       </IconButton>
      //       {/* <Typography variant="h6" component="div" sx={{ flexGrow: 1, mt:1}}>
      //       <img style={{ width:"60px", height:"60px" }} src={logo} alt="" className="img-fluid" />
      //       </Typography> */}
            
      //       <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              
      //       </Typography>
            
            

            
            
      //       <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
      //       <Link to="/cart" underline="none"> Cart <ShoppingCartTwoToneIcon/> {cartItems.length}</Link>
      //       </Typography>
            
            
            
      //       <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
      //       <Link to="/admin" underline="none"> Admin</Link>
      //       </Typography>
      //       <Link to="/cart" underline="none">
      //       <Button to="/login" color="inherit">Login</Button></Link>
      //     </Toolbar>
      //   </AppBar>
      // </Box>
    );
};

export default Navbar;