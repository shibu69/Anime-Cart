import React from "react";
import Carousel from "react-multi-carousel";
import { tShirts ,hoodies } from "./MenItemData";
import "./MenItem.css";

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

const MenItem = () => {
  return (
    <div id="menItem-container">
      <div className="tshirts-container">
        <div className="menItem-head">T-SHIRTS</div>

        <Carousel
          responsive={responsive}
          autoPlay={true}
          infinite={true}
          autoPlaySpeed={5000}
        >
          {tShirts.map((item, index) => {
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
        <div className="menItem-head">HOODIES</div>

        <Carousel
          responsive={responsive}
          autoPlay={true}
          infinite={true}
          autoPlaySpeed={5000}
        >
          {hoodies.map((item, index) => {
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
  );
};

export default MenItem;
