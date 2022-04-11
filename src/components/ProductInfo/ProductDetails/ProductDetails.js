import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import SendIcon from '@mui/icons-material/Send';


import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Button } from '@mui/material';
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { useDispatch, useSelector } from 'react-redux';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(.1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));


const ProductDetails = () => {

   
   const {cartItems}= useSelector(state => state.cartReducer)

   const dispatch= useDispatch();


  


   const handleAddProduct = (product) => {

    dispatch({type: 'ADD_TO_CART', payload:product})
    console.log('Product Added',product)


}




    const {_id } = useParams();
    console.log(_id);
    const[productDetails, setProductDetails] = useState([]);

    const [size, setSize] = React.useState('');

    const handleChange = (event) => {
        setSize(event.target.value);
      };

    useEffect(() => {
        fetch('http://localhost:5000/products/'+ _id)
        .then(res => res.json())
        .then(data =>{
     
            setProductDetails(data);
         
        })
        .catch(err => console.log(err))
     
     
         }   )


    return (

    

         <Box sx={{ flexGrow: 1 ,
            display: 'flex',
            flexWrap: 'wrap',}}>
              <Link  to='/home'> <Button style={{ marginLeft: '100px' }}  variant="text" endIcon={<SendIcon />}> <h1> Back </h1> </Button> </Link>
                
             

         <Grid container spacing={1}
         sx={{ 
            display: 'flex',
            flexWrap: 'wrap',}}

            
            >
              
         
         
           <Grid item xs={6} md={5}
           
           >
             <Item>
                 
             <img style={{ width:"70%"}} src={productDetails.imageURL} alt="" className="img-fluid" />

             </Item>
           </Grid>
           <Grid item xs={6} md={7} style={{ mt:5}}>

             <Item> <ShoppingCartTwoToneIcon /> {cartItems.length}   </Item>
             <Item>

             <h1> {productDetails.name} </h1>    
             <h1> {productDetails.catagory} </h1>    
             <h1> {productDetails.price} (BDT)</h1>

             
        
          
         
             <InputLabel id="demo-simple-select-label"> Size Chart UK </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={size}
          label="Age"
          onChange={handleChange}
          
        >
                 {
                                 productDetails?.catagory=== "Football Boot" ?   
                                  <MenuItem value={20}>36</MenuItem>
              
                                :
                                <MenuItem value={20}>X</MenuItem>
                                
                        } 
            
          
          
          
        </Select>
        
        
             </Item>
             <Item>
             <Button variant="contained" disableElevation  onClick={() =>handleAddProduct(productDetails)} >
  Add TO Cart <ShoppingCartTwoToneIcon/>
</Button>

<br></br>
<h3 > {productDetails.description}  </h3>
             </Item>
           </Grid>
          
         </Grid>
       </Box>
      
    );
};

export default ProductDetails;


