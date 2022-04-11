import React, { useEffect, useState } from 'react';
import ManageInventoryShow from './ManageInventoryShow';

import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';

const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  });

const ManageInventory = () => {

    const [product,setProduct] = useState([]);

   
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => {
                setProduct(data);
                

            })
            .catch(err => console.log(err))
    }, [])



    return (
        <div>


{
             

          
             product.map(product => <ManageInventoryShow product ={product} ></ManageInventoryShow> )
             
              }



            
        </div>
    );
};

export default ManageInventory;