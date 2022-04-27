import React, { useState,useContext  } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import Lottie from 'react-lottie';
import { useHistory } from 'react-router-dom';
import './CartItems.css';
import axios from 'axios';
import { useForm } from "react-hook-form";
import TextField from '@mui/material/TextField';

import { UserContext } from '../../App';
import { Grid, Input,Item } from '@mui/material';
import {
  Box,
  Breadcrumbs,
  Container,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Table,
  TableBody,
  Button,
} from "@mui/material";
import Paper from "@mui/material/Paper";
import { styled} from "@mui/material/styles";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";

import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";


import LocalMallIcon from "@mui/icons-material/LocalMall";

import EditIcon from "@mui/icons-material/Edit";
import { Link } from 'react-router-dom';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    textAlign: "center",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    textAlign: "center",
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));
      



const CartItems = () => {

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

   const email = loggedInUser.email;
  const names = loggedInUser.name;
  const { register, handleSubmit, reset, errors } = useForm();

  const onSubmit = data => {

      reset();
  
      
   };
    
    const { cartItems } = useSelector(state => state.cartReducer)
    const history = useHistory();
    const dispatch = useDispatch();
   
    const [qty, setQty] = useState(1)
  
    const qtyPlus = (_id) => {
        setQty(Number(qty) + 1)
    }
    const qtyMinus = (_id) => {
        if (qty > 1) {
            setQty(qty - 1)
        }
    }



    let total = cartItems.reduce((previous, product) => previous + product.price, 0);



     const formatNumber = num => {
        const precision = num.toFixed(2);
        return Number(precision);
    }

    const removeFromCart = (product) => {

      dispatch({type: 'REMOVE_FROM_CART', payload:product})
      
      console.log('Product removed', product)
  
  }

  const handlePlaceOrder = () => {
   history.pushState('/shipping')

  }



    return (
<Box sx={{ py: 8 }}>
        <Container>
          {cartItems.length === 0 ? (
            //   No Product Only Cart
            <Box className="middleCart">
              <LocalMallIcon
                sx={{ color: "#FF7004", fontSize: "90px", mb: 1 }}
              />
              <Typography variant="h5">
                There are no products in your cart!
              </Typography>
            </Box>
          ) : (

      <Grid container spacing={2}>
      


{/* //////////////////////////////////////// CART ITEMS//////////////////////// */}


      <Grid item xs={7}>


      <Box>
      {/* Title Container */}
     

      {/* Cart Table */}
      {/*  Table Details */}
      
            
            <Box>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                  {/* Table Head */}
                  <TableHead>
                    <TableRow>
                      <StyledTableCell>IMAGE</StyledTableCell>
                      <StyledTableCell align="left">
                        PRODUCT NAME
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        UNTIL PRICE
                      </StyledTableCell>
                      {/* <StyledTableCell align="left">QTY</StyledTableCell> 
                      <StyledTableCell align="left">SUBTOTAL</StyledTableCell>*/}
                      <StyledTableCell align="left">ACTION</StyledTableCell>
                    </TableRow>
                  </TableHead>
                  {/* Table Body */}
                  {cartItems.map((product) => (
                    <TableBody key={product._id}>
                      <StyledTableRow>
                        <StyledTableCell component="th" scope="row">
                          {/* Image */}
                          <img
                            src={product.imageURL}
                            alt=""
                            width="150"
                            height="100"
                            objectFit="cover"
                          />
                        </StyledTableCell>
                        {/* Title */}
                        <StyledTableCell align="left">
                          {product.name}
                        </StyledTableCell>
                        <StyledTableCell align="left">
                          ${product.price}
                        </StyledTableCell>
                        
                        
                        <StyledTableCell align="middle">
                        
                            {/* <EditIcon sx={{ mr: 2, cursor: "pointer" }} /> */}
                         

                          <CancelOutlinedIcon
                            sx={{ cursor: "pointer" }}
                           onClick={() =>removeFromCart(product)}
                          />
                        </StyledTableCell>
                      </StyledTableRow>
                    </TableBody>
                  ))}
                  <tfoot>
                    <tr sx={{ textAlign: "right" }}>
                      <Typography sx={{ p: 2 }} variant="h4" className="title">
                        Grand Total: {total}
                      </Typography>
                    </tr>
                  </tfoot>
                </Table>
              </TableContainer>
              {/* <Box className="checkout">
                <br></br>
                 <Link to="/shipping" > <Button variant="contained" aria-label="outlined primary button group" >
                    PROCEED TO CHECKOUT
                  </Button>
                  </Link>
              </Box> */}
            </Box>
          
        
      
    </Box>
   
  </Grid>

 {/* //////////////////////////////////////// CART ITEMS//////////////////////// */}





 <Grid item xs={5}>
  
  

 <h3> Order Information</h3>

    <form  class=" mt-5"  onSubmit={handleSubmit(onSubmit)}  sx={{ flexDirection: 'column',mr:''}}>

  

<TextField  id="outlined-basic" label="Name" {...register("name", { required: true})} value={names}/>
<br></br>
<br></br>
<TextField id="outlined-basic" label="Email" {...register("email", { required: true })} value={email} />
<br></br>
<br></br>
<TextField id="outlined-basic" label="Phone"  {...register("pone", { required: true})} placeholder="phone" />
<br></br>
<br></br>
<TextField id="outlined-basic" label="Short-Description"  {...register("shortDescription", { required: true})} placeholder="description" />
<br></br>
<br></br>
<TextField id="outlined-basic" label="Price"  type="number" {...register("price", { required: true})} placeholder="price" />
<br></br>
<br></br>






<br></br>
<br></br>
<Button
                  type="submit"
                  variant="contained"
                  color="success"
                 
              >
                  Confirm
              </Button>
</form>















  </Grid>
      

 </Grid>
 )}
 </Container>
</Box>
    );
};

export default CartItems;