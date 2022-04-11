import React from 'react';
import './Banner.css'
import { Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import banner from '../../images/Untitled4.png'

const Banner = () => {
    return (
        <section id="banner">
      <div className="banner-text">


      {/* <img style={{ width:"100%"}} src={banner} alt="" className="img-fluid" /> */}

         <h1>Buy & Explore</h1>
        <p>
         
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam necessitatibus illum aliquid minima nostrum, aut, neque libero repellat accusantium obcaecati molestiae ducimus quibusdam aspernatur sapiente fuga nihil commodi recusandae. Distinctio!
        </p> 
         <Button variant="outlined" size="large" endIcon={<SendIcon />}>
        Shop Now
        
      </Button> 
      </div>
    </section>
    );
};

export default Banner;