import React from 'react';
import Button from '@mui/material/Button';
import Navbar from '../../shared/Navbar/Navbar';
import Banner from './Banner';
import AboutUs from './AboutUs'
import Product from '../ProductInfo/Product/Product';
import Footer from '../../shared/Footer/Footer'
import PreOrder from '../PreOrder/PreOrder';
const Home = () => {
    return (
        <div>
            <Navbar/>
           <Banner/>
           <AboutUs/>
           <PreOrder></PreOrder>
           <Product/>
           <Footer></Footer>

            
        </div>
    );
};

export default Home;