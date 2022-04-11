import React, { useState } from 'react';
import './AddProducts.css';
import axios from 'axios';
import { useForm } from "react-hook-form";
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Grid, Input,Item } from '@mui/material';



const AddProducts = () => {



  
  const { register, handleSubmit, reset, errors } = useForm();

  const [imageURL, setIMageURL] = useState(null);
  
  const onSubmit = data => {

    reset();

    const productData = {
      name: data.name,
      catagory: data.catagory,
      price: data.price,
      description: data.description,
      shortDescription: data.shortDescription,
      imageURL: imageURL
    };
    console.log(productData);
   const url = `http://localhost:5000/addProduct`;
   
    fetch(url, {
      method: 'POST', 
      headers: {
        'content-type': 'application/json'
     },
     body: JSON.stringify(productData)
    })
    .then(res => console.log('server side response', res))
 };
  
 const handleImageUpload = event => {
   console.log(event.target.files[0])
    const imageData = new FormData();
    imageData.set('key', 'c4ec85a1609494eca99a9f4b0660e96a');
     imageData.append('image', event.target.files[0]);
   
    axios.post('https://api.imgbb.com/1/upload', 
    imageData)
    .then(function (response) {
        setIMageURL(response.data.data.display_url);
   
    })
    .catch(function (error) {
    console.log(error);
    });

 }
     

    return (
        <div>




<Grid container spacing={2}>
  
  <Grid item xs={4}>
    xs=4
  </Grid>
  <Grid item xs={8}>
    <h3>Pleace Add Home Product</h3>

    <form  class=" mt-5"  onSubmit={handleSubmit(onSubmit)}  sx={{ flexDirection: 'column',mr:''}}>

  

<TextField id="outlined-basic" label="Name" {...register("name", { required: true})} placeholder="Name" />
<br></br>
<br></br>
<TextField id="outlined-basic" label="Catagory" {...register("catagory", { required: true })} placeholder="catagory" />
<br></br>
<br></br>
<TextField id="outlined-basic" label="Description"  {...register("description", { required: true})} placeholder="description" />
<br></br>
<br></br>
<TextField id="outlined-basic" label="Short-Description"  {...register("shortDescription", { required: true})} placeholder="description" />
<br></br>
<br></br>
<TextField id="outlined-basic" label="Price"  type="number" {...register("price", { required: true})} placeholder="price" />
<br></br>
<br></br>


<Input

 accept="image/*" 
 id="contained-button-file" 
  type="file" 
  onChange={handleImageUpload}
  
 sx={{width:215}}
 

 />



<br></br>
<br></br>
<Button
                  type="submit"
                  variant="contained"
                  color="success"
                 
              >
                  Submit
              </Button>
</form>

  
  </Grid>
</Grid>







            
        </div>
    );
};

export default AddProducts;