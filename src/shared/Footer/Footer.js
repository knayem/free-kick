import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'
import logo from '../../images/logo.png'
const Footer = () => {
    return (
        <div className="container">
        <div className="footerItem">
            <div className="item">
                
                <img style={{ width:"60%", height:"60%" }} src={logo} alt="" className="img-fluid" />
            </div>
            <div className="item">
                <h2 className="footerTitle">About Us</h2>
                <ul className="footerMenu">
                <li className="footerMenuList1"><Link to="/about"> <span style={{color: 'white'}} >About Online Food</span></Link></li>
                <li className="footerMenuList1"><Link to="/blog"> <span style={{color: 'white'}} >Read Our Blog</span></Link></li>
                <li className="footerMenuList1"><Link to="/help"> <span style={{color: 'white'}} >Get Help</span> </Link></li>
                <li className="footerMenuList1"><Link to="/faq"> <span style={{color: 'white'}} >Read FAQ </span> </Link></li>
                </ul>
            </div>
           
            <div className="item">
                <h2 className="footerTitle">Contact Us</h2>
                <ul className="footerMenu">
                    <li className="footerMenuList">Jamuna City</li>
                    <li className="footerMenuList">Free.kick@Gmail.com</li>
                    <li className="footerMenuList">+08801235647</li>
                </ul>
            </div>
        </div>
    </div>
    );
};

export default Footer;