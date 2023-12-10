import React from 'react';
import "./Popular.css";
import Product1 from "../../Images/p1.jpg";
import Product2 from "../../Images/p2.jpg";
import Product3 from "../../Images/p3.jpg";
import Product4 from "../../Images/p4.jpg";
import Product5 from "../../Images/p5.jpg";
import Product6 from "../../Images/p6.jpg";

const Popular = () => {
  return (
    <div id='Popular-container'>
       <div id="pophead">
         <h3>POPULAR PRODUCTS</h3>
       </div>


       <div className="popular-product">

       <div className="popular-product-conatiner">
        <figure>
          <a href="https://amzn.to/46MxMhG"><img src={Product1} alt="First Product" loading="lazy"/></a>
          <figcaption>KAKASHI OVERSIZED T-SHIRT</figcaption>
          <figcaption>₹849</figcaption>
        </figure>
        <figure>
          <a href="https://amzn.to/3RAlh4e"><img src={Product2} alt="Second Product"loading="lazy" /></a>
          <figcaption>GOKU OVERSIZED T-SHIRT</figcaption>
          <figcaption>₹799</figcaption>
        </figure>
        <figure>
          <a href="https://amzn.to/47S3Wtk"><img src={Product3} alt="Third Product" loading="lazy" /></a>
          <figcaption>ITACHI UCCHIHA TSHIRTS</figcaption>
          <figcaption>₹749</figcaption>
        </figure>
       </div>
       <div className="popular-product-conatiner-2">
        <figure>
          <a href="https://amzn.to/3uT2GHS"><img src={Product4}  alt="Fourth Product" loading="lazy"/></a>
          <figcaption >FRACTAL NASA MOON T SHIRTS</figcaption>
          <figcaption>₹799</figcaption>
        </figure>
        <figure>
          <a href="https://amzn.to/41ieAqR"><img src={Product5} alt="Fifth Product" loading="lazy"/></a>
          <figcaption>ZORO THREE SWORDS</figcaption>
          <figcaption>₹999</figcaption>
        </figure>
        <figure>
          <a href="https://amzn.to/3Tji1eR"><img src={Product6} alt="Sixth Product" loading="lazy"/></a>
          <figcaption>NARUTO RED COLOR SHOES</figcaption>
          <figcaption>₹537</figcaption>
        </figure>
       </div>
       </div>
    </div>
  )
}

export default Popular
