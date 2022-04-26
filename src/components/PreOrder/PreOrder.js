
import React, { useEffect, useState } from 'react';
 import preOrderData from '../../Data/Data.json'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './PreOrderSlider.css'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
 import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Button } from '@mui/material';

const PreviousBtn = (props) => {
  console.log(props);
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowBackIosIcon style={{ color: "blue", fontSize: "20px" }} />
    </div>
  );
};
const NextBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowForwardIosIcon style={{ color: "blue", fontSize: "20px" }} />
    </div>
  );
};

const carouselProperties = {
  prevArrow: <PreviousBtn />,
  nextArrow: <NextBtn />,
  slidesToShow: 3,
  // infinite={false}
  // slidesToScroll={3}
  centerMode: true,
  centerPadding: "170px",
  responsive: [
    {
      breakpoint: 426,
      settings: {
        slidesToShow: 1,
        centerMode: false,
      },
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 3,
        centerMode: false,
      },
    },
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 4,
        centerMode: false,
        slidesToScroll: 2,
      },
    },
  ],
};

const  PreOrder  = () => {

     const [preOrder,setPreOrder] = useState([])

    useEffect(() => {

      setPreOrder(preOrderData);
    },[])




  return (
    <div style={{ margin: "30px",marginTop: "5%"}} className="carousel">
      
      <Slider {...carouselProperties}>
        {preOrder.map((item) => (
          <Card item={item} />
        ))}
      </Slider>
    </div>
  );
};

const Card = ({ item }) => {
  return (
    <div style={{ textAlign: "center"}}>
      <img
        className="multi__image"
        src={item.image}
        alt={item.name}
        style={{
          width: "120%",
          height: "400px",
          objectFit: "contain",
          marginBottom: "10px",
        }}
      />

      <button className="Button"> Pre-Order Now</button> {item.cost}BDT
      
    </div>
  );
};

export default  PreOrder ;












































