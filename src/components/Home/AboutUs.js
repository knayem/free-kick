import React from 'react';
import  './AboutUs.css';


import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';

import EasyOrder from '../../images/order-now.png'
import fastDelivaery from '../../images/Fast-delivery.png'
import bestQuality from '../../images/premium-quality.png'




const AboutUs = () => {

  const theme = useTheme();

    return (
        <div>

          <h1>WHY CHOSE US</h1>

<Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent:'center',

        '& > :not(style)': {
          m: 1,
          width: 300,
        height: 150,
        },
       
      }}
    >
       
       <Card sx={{ display: 'flex' }} >
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            Easy TO Order
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            Mac Miller
          </Typography>
        </CardContent>
       
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 170 }}
        image={EasyOrder}
        alt="Live from space album cover"
      />
    </Card>


    <Card sx={{ display: 'flex' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            Fastest Delevary
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            Mac Miller
          </Typography>
        </CardContent>
        
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        
        image={fastDelivaery}
        alt="Live from space album cover"
      />
    </Card>
    <Card sx={{ display: 'flex' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
           Best Qulaty
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            Mac Miller
          </Typography>
        </CardContent>
        
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image={bestQuality}
        alt="Live from space album cover"
      />
    </Card>
    </Box>
        </div>
    );
};

export default AboutUs;








 {/* <div class="container">

       

        <div class="card">

            <div class="slide slide1">

                <div class="content">

                    <div class="icon">

                        <i class="fa fa-user-circle" aria-hidden="true"></i>

                    </div>

                </div>

            </div>

            <div class="slide slide2">

                <div class="content">

                    <h3>

                        Hello there!

                    </h3>

                    <p>Trust yourself and keep going.</p>

                </div>

            </div>

        </div>

        

    </div>
     <div class="slide slide1">

                <div class="content">

                    <div class="icon">

                        <i class="fa fa-user-circle" aria-hidden="true"></i>

                    </div>

                </div>

            </div>

            <div class="slide slide2">

                <div class="content">

                    <h3>

                        Hello there!

                    </h3>

                    <p>Trust yourself and keep going.</p>

                </div>

            </div>

            <div class = "container">
    <div class = "card">
      <div class = "image">
        <img href = "#" src = "https://i.pinimg.com/originals/a4/7b/a5/a47ba59b4a353e0928ef0551ca44f980.jpg"/>
      </div>
      <div class = "content">
        <h3>This is content</h3>
        <p>DIn publishing and graphic design,           Lorem ipsum is a placeholder text               commonly used to demonstrate the visual         form of a document or a typeface without         relying on meaningful content.</p>
      </div>
    </div>    
  </div> */}

{/* <div class="container">
  <a class="card1" href="#">
    <h3>This is option 1</h3>
    <p class="small">Card description with lots of great facts and interesting details.</p>
    <div class="go-corner" href="#">
      <div class="go-arrow">
        →
      </div>
    </div>
  </a>
  
  <a class="card2" href="#">
    <h3>This is option 2</h3>
    <p class="small">Card description with lots of great facts and interesting details.</p>
    
    <div class="go-corner" href="#">
      <div class="go-arrow">
        →
      </div>
    </div>
  </a>
  
  <a class="card3" href="#">
    <h3>This is option 3</h3>
    <p class="small">Card description with lots of great facts and interesting details.</p>
    <div class="dimmer"></div>
    <div class="go-corner" href="#">
      <div class="go-arrow">
        →
      </div>
    </div>
  </a>
  
  <a class="card4" href="#">
    

    <h3>This is option 4</h3>
    <p class="small">Card description with lots of great facts and interesting details.</p>
    <div class="dimmer"></div>
    <div class="go-corner" href="#">
      <div class="go-arrow">
        →
      </div>
    </div>
  </a>
  
</div> */}