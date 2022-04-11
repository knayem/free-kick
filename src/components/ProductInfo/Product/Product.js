import React, { useEffect, useState } from 'react';

import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';


import DisplayProduct from '../DisplayProduct/DisplayProduct'
import { Button, ButtonGroup } from '@mui/material';




const Product = () => {

    const [product,setProduct]= useState([])
    const [ctg, setCtg] = useState("Football");

    const updatedProduct= product.filter(currentCtg => currentCtg.catagory===ctg)

    // const filterProduct = (ctg) =>{
      
    //   const updatedProduct= product.filter((currentCtg) =>{

    //       return currentCtg.catagory===ctg;
    //   })

    //   setProduct(updatedProduct);
    // }
    

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => {
                setProduct(data);
                

            })
            .catch(err => console.log(err))
    }, [])



    return (
        <div className="about">
          <h1>FEATURED PRODUCTS</h1>
           
          <ButtonGroup variant="text" aria-label="text button group">
  <Button onClick={() => (setCtg( 'National') || setCtg( 'Club' )) }> <h4>Club Jersey</h4></Button>
  <Button onClick={() => setCtg('National') }> <h4>National Jersey</h4></Button>
  <Button onClick={() => setCtg('Football') } > <h4> Football</h4></Button>
  <Button onClick={() => setCtg('Football Boot') }> <h4>Football Boot</h4></Button>
  
</ButtonGroup>

<Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent:'center',

        '& > :not(style)': {
          m: 1,
          width: 300,
        height: 300,
        },
      }}
    >




    


            {product.length === 0 && <CircularProgress />}


            {
              
              updatedProduct.map(product => <DisplayProduct product={product}></DisplayProduct>)
           

            }

            </Box>
            
        </div>
    );
};

export default Product;