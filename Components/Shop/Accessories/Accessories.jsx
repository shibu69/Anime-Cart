import React from "react";
import Carousel from "react-multi-carousel";
import { Toys ,stationary,cups,shoes } from "./AccessoriesData";
import "./Accessories.css";


const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Accessories = () => {
  return (
    <div id="menItem-container">

      <div id="hoodies-container">
        <div className="menItem-head">SHOES</div>

        <Carousel
          responsive={responsive}
          autoPlay={true}
          infinite={true}
          autoPlaySpeed={5000}
        >
          {shoes.map((item, index) => {
            return (
              <div className="men-item">
                <div className="menItem-image">
                  <img
                    className="menItem-imgs"
                    src={item.image}
                    alt="Rated Products"
                  />
                  <h3 className="menItem-pr-name">{item.title}</h3>
                  <p className="menItem-price">{item.price}</p>
                </div>
              </div>
            );
          })}
        </Carousel>
      </div>
      <div className="tshirts-container">
        
        <div className="menItem-head">TOYS</div>

        <Carousel
          responsive={responsive}
          autoPlay={true}
          infinite={true}
          autoPlaySpeed={5000}
        >
          {Toys.map((item, index) => {
            return (
              <div className="men-item">
                <div className="menItem-image">
                  <img
                    className="menItem-imgs"
                    src={item.image}
                    alt="Rated Products"
                  />
                  <h3 className="menItem-pr-name">{item.title}</h3>
                  <p className="menItem-price">{item.price}</p>
                </div>
              </div>
            );
          })}
        </Carousel>
      </div>
      <div id="hoodies-container">
        <div className="menItem-head">STATIONARY</div>

        <Carousel
          responsive={responsive}
          autoPlay={true}
          infinite={true}
          autoPlaySpeed={5000}
        >
          {stationary.map((item, index) => {
            return (
              <div className="men-item">
                <div className="menItem-image">
                  <img
                    className="menItem-imgs"
                    src={item.image}
                    alt="Rated Products"
                  />
                  <h3 className="menItem-pr-name">{item.title}</h3>
                  <p className="menItem-price">{item.price}</p>
                </div>
              </div>
            );
          })}
        </Carousel>
      </div>

      
      <div id="hoodies-container">
        <div className="menItem-head">CUPS</div>

        <Carousel
          responsive={responsive}
          autoPlay={true}
          infinite={true}
          autoPlaySpeed={5000}
        >
          {cups.map((item, index) => {
            return (
              <div className="men-item">
                <div className="menItem-image">
                  <img
                    className="menItem-imgs"
                    src={item.image}
                    alt="Rated Products"
                  />
                  <h3 className="menItem-pr-name">{item.title}</h3>
                  <p className="menItem-price">{item.price}</p>
                </div>
              </div>
            );
          })}
        </Carousel>
      </div>

      
    </div>
  )
}

export default Accessories
