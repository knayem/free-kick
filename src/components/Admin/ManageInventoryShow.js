import React from 'react';

import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import DeleteIcon from '@mui/icons-material/Delete';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import { Delete } from '@mui/icons-material';

const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  });

const ManageInventoryShow = (props) => {
    const { name,price,description,type,imageURL,_id} = props.product;



    const deleteProduct= id => {
        console.log(id);
       fetch(`http://localhost:5000/deleteProduct/${id} `,{
 
          method: 'DELETE',
 
       })
   
       .then(res => res.json())
       
       .then(result => {
   
     console.log('deleted product successfully')
 
       })

    }

    const updateProduct = id => {
        console.log("hit inside")

        const product = { _id, price };
      
        fetch(`http://localhost:5000/update/${id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(product)

        })
            .then(res => res.json())
            .then(result => {

                // if (result) {
                //   loadAllProducts();
                    
                // }
                console.log('updated product successfully')
            })
    }








    return (
        <div>

<Paper
      sx={{
        p: 2,
        margin: 'auto',
        maxWidth: 500,
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      }}
    >
      <Grid container spacing={2}
      >
        <Grid item>
          <ButtonBase sx={{ width: 128, height: 128 }}>
            <Img alt="complex" src={imageURL} />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
                <h2 style={{fontWeight: "bold",color: "red"}}>  {name} </h2>
              </Typography>
              <Typography variant="body2" gutterBottom>
               {description}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {type}
              </Typography>
            </Grid>
            <Grid item>
              <Typography sx={{ cursor: 'pointer' }} variant="body2">
                 <Delete onClick={() => deleteProduct(_id) }></Delete> || <EditTwoToneIcon onClick={() => updateProduct(_id) } ></EditTwoToneIcon>
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" component="div">
              ${price}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
            
        </div>
    );
};

export default ManageInventoryShow;