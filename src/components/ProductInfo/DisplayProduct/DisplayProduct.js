import React from 'react';

import {Link} from 'react-router-dom';

import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';

import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const DisplayProduct = (props) => {

const {name,price,catagory,type,imageURL,_id}=props.product




    return (
        <div style={{ padding: 20 }} item xs zeroMinWidth >

<Link to={`/productDetails/${_id}`}> 
  

<Card sx={{ maxWidth: 345,boxShadow: 1,
          borderRadius: 3, }}>
      <CardHeader  
      sx={{ color: 'text.primary', fontSize: 34, fontWeight: 'medium' }}
        avatar={
          <Avatar sx={{ bgcolor: red[500] , }} aria-label="recipe">
            Free Kick
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }

         title={name}
        
      />
      <CardMedia
        component="img"
        height="150px"
        src={imageURL} 
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {catagory}
        </Typography>
      </CardContent>
      {/* <CardContent>
        <Typography sx={{ color: 'success.dark', fontSize: 34, fontWeight: 'medium' }} variant="body2"  >
          {price}TK.
        </Typography>
      </CardContent> */}
     
     
    </Card>
    </Link>

            
        </div>
    );
};

export default DisplayProduct;