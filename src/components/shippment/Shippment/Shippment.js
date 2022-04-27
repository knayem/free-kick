import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Grid, Input,Item } from '@mui/material';
import CartItems from "../../CartItems/CartItems"
const Shippment = () => {

   
    return (
        <div>
            <Grid container spacing={2}>
  
  <Grid item xs={8}>
    <CartItems></CartItems>
  </Grid>
  <Grid item xs={4}>
   
  
  </Grid>
</Grid>
            
        </div>
    );
};

export default Shippment;