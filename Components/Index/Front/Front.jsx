import React from "react";
import { useEffect,useState } from "react";
import "./Front.css";
import { banner } from "./Data";


const Index = () => {
  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  let timeOut = null;

  useEffect(() => {
    timeOut =   // eslint-disable-next-line
      autoPlay &&
      setTimeout(() => {
        slideRight();
      }, 2000);
  });

  const slideRight = () => {
    setCurrent(current === banner.length - 1 ? 0 : current + 1);
  };

  const slideLeft = () => {
    setCurrent(current === 0 ? banner.length - 1 : current - 1);
  };
  return (
    <div
      className="carousel"
      onMouseEnter={() => {
        setAutoPlay(false);
        clearTimeout(timeOut);
      }}
      onMouseLeave={() => {
        setAutoPlay(true);
      }}
    >
      <div className="carousel_wrapper">
        {banner.map((item, index) => {
          return (
            <div
              key={index}
              className={
                index === current
                  ? "carousel_card carousel_card-active"
                  : "carousel_card"
              }
            >
              <img
              loading="lazy"
                className="card_image"
                src={item.image}
                alt="Crousel banner"
              />
              <div className="card_overlay">
                <p className="card_abtitle">{item.abtitle}</p>
                <h1 className="title">{item.title}</h1>
              </div>
            </div>
          );
        })}
        <div className="carousel_arrow_left" onClick={slideLeft}>
          &lsaquo;
        </div>
        <div className="carousel_arrow_right" onClick={slideRight}>
          &rsaquo;
        </div>
        <div className="carousel_pagination">
          {banner.map((_, index) => {
            return (
              <div
                key={index}
                className={
                  index === current
                    ? "pagination_dot pagination_dot-active"
                    : "pagination_dot"
                }
                onClick={() => setCurrent(index)}
              ></div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Index;
