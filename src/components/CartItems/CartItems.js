import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Lottie from 'react-lottie';

import './CartItems.css'






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

  
    
    const { cartItems } = useSelector(state => state.cartReducer)
   
    const dispatch = useDispatch();
   
    const [qty, setQty] = useState(1)
  
    const qtyPlus = () => {
        setQty(Number(qty) + 1)
    }
    const qtyMinus = () => {
        if (qty > 1) {
            setQty(qty - 1)
        }
    }

    const removeFromCart = (product) => {

      dispatch({type: 'REMOVE_FROM_CART', payload:product})
      
      console.log('Product removed', product)
  
  }



    return (
      <Box>
      {/* Title Container */}
     

      {/* Cart Table */}
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
            //   Table Details
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
                      <StyledTableCell align="left">QTY</StyledTableCell>
                      <StyledTableCell align="left">SUBTOTAL</StyledTableCell>
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
                        <StyledTableCell align="left">
                      
                        </StyledTableCell>
                        <StyledTableCell align="left">
                          {product.price }
                        </StyledTableCell>
                        <StyledTableCell align="middle">
                        
                            <EditIcon sx={{ mr: 2, cursor: "pointer" }} />
                         

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
                      <Typography sx={{ p: 2 }} variant="h2" className="title">
                        Grand Total: ${3}.00
                      </Typography>
                    </tr>
                  </tfoot>
                </Table>
              </TableContainer>
              <Box className="checkout">
                
                  <Button className="checkoutBtn">
                    PROCEED TO CHECKOUT
                  </Button>
               
              </Box>
            </Box>
          )}
        </Container>
      </Box>
    </Box>
    );
};

export default CartItems;