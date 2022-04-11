import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ButtonBase from '@mui/material/ButtonBase';
import DeleteIcon from '@mui/icons-material/Delete';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import { Delete } from '@mui/icons-material';



const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));



const rows = [
 
 
];
 


const CartItems = () => {

    
    const { cartItems } = useSelector(state => state.cartReducer)
    const dispatch = useDispatch();
    

    return (
        <div>
            <h2>Your Order {cartItems.length} Items  </h2>


     


<TableContainer component={Paper}>
      <Table sx={{ minWidth: 300 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Product</StyledTableCell>
            <StyledTableCell align="right"> <h3>Catagory</h3></StyledTableCell>
            <StyledTableCell align="right"><h4>Quantity</h4></StyledTableCell>
            <StyledTableCell align="right"><h4>Price</h4></StyledTableCell>
            <StyledTableCell align="right"><h4>Action</h4></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cartItems.map((product) => (
            <StyledTableRow key={product._id}>
              <StyledTableCell component="th" scope="row">
                <h2>{product.name} </h2>
                {/* <img style={{width:"100px",height:"100px"}} src={product.imageURL}    /> */}
              </StyledTableCell>
              <StyledTableCell align="right"><h2>{product.catagory}</h2></StyledTableCell>
              <StyledTableCell align="right"><h2>{1}</h2></StyledTableCell>
              <StyledTableCell align="right"><h2>{product.price}</h2></StyledTableCell>
              <StyledTableCell align="right"> <Delete ></Delete>  </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

     
    
            
        </div>
    );
};

export default CartItems;