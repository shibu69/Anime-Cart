import React from "react";
import "./Footer.css";
import promo from "../Images/Promo.webp";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="Foot-container">
    <div id="footer-container">
      <div id="promo">
        <p>PROMO</p>
        <img src={promo} alt="Promo"/>
        <h4> Finding the best product for you this SUMMER</h4>
        <h7>From JAN 2024 - MAR 2024</h7>
      </div>
      <div id="qlink">
        <p>QUICK LINKS</p>
        <div id="lists">
          <ul >
            <li><Link>Men Items</Link></li>
            <li><Link>Women Items</Link></li>
            <li><Link>Accessories</Link></li>
            <li><Link>Feedback</Link></li>
          </ul>
          
        </div>
      </div>
      <div id="contact">
        <p>CONTACT INFO</p>
        <div className="address">
          <FaLocationDot color="sienna" /> <h1 className="add">106C ,Sk Block, Sector-122, Noida, Uttar Pradesh</h1>
        </div>
        <div className="phone">
          <FaPhoneAlt color="sienna" /> <h1 className="add">+91 842946290</h1>
        </div>
        <div className="email">
          <IoMdMail color="sienna" /> <h1 className="add">shivendramishra.sm93@gmail.com</h1>
        </div>
      </div>
    </div>
    <div className="copyright">
    Copyright ©2023 All rights reserved | This Website is made with <FaHeart color="red" /> by Shivendra Mishra
    </div>
    </div>
  );
};

export default Footer;
