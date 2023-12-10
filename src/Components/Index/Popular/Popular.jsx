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
          <img src={Product1} alt="First Product" loading="lazy"/>
          <figcaption>KAKASHI OVERSIZED T-SHIRT</figcaption>
          <figcaption>₹499</figcaption>
        </figure>
        <figure>
          <img src={Product2} alt="Second Product"loading="lazy" />
          <figcaption>GOKU OVERSIZED T-SHIRT</figcaption>
          <figcaption>₹799</figcaption>
        </figure>
        <figure>
          <img src={Product3} alt="Third Product" loading="lazy" />
          <figcaption>RISE TAG OVERSIZED T-SHIRT</figcaption>
          <figcaption>₹399</figcaption>
        </figure>
       </div>
       <div className="popular-product-conatiner-2">
        <figure>
          <img src={Product4}  alt="Fourth Product" loading="lazy"/>
          <figcaption >GOKU T-SHIRTS</figcaption>
          <figcaption>₹899</figcaption>
        </figure>
        <figure>
          <img src={Product5} alt="Fifth Product" loading="lazy"/>
          <figcaption>CONQUER WALL POSTER</figcaption>
          <figcaption>₹299</figcaption>
        </figure>
        <figure>
          <img src={Product6} alt="Sixth Product" loading="lazy"/>
          <figcaption>NARUTO RED COLOR SHOES</figcaption>
          <figcaption>₹1499</figcaption>
        </figure>
       </div>
       </div>
    </div>
  )
}

export default Popular
