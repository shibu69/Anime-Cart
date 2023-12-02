import React from "react";
import "./Rated.css";
import { RatedImg } from "./RatedData";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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

const Rated = () => {
  return (
    <div className="rated-container">
      <div className="rated-head">MOST RATED PRODUCTS</div>

      <Carousel
        responsive={responsive}
        autoPlay={true}
        infinite={true}
        autoPlaySpeed={2000}
      >
        {RatedImg.map((item, index) => {
          return (
            <div className="most-rated">
              <div className="rated-image">
                <img
                  className="rated-imgs"
                  src={item.image}
                  alt="Rated Products"
                />
                <h3 className="rated-pr-name">{item.name}</h3>
                <p className="rated-price">{item.price}</p>
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Rated;
