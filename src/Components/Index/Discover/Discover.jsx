import React from "react";
import "./Discover.css";
import { Link } from "react-router-dom";

const Discover = () => {
  return (
    <div id="Discover-container">
      <div id="dishead">
        <h3>DISCOVER THE COLLECTIONS</h3>
      </div>

      <div className="img-container">
        <div id="men-img" loading="lazy">
          <Link to={"men-item"}>MALE</Link>
        </div>

        <div id="women-img">
          <Link to={"women-item"}>FEMALE</Link>
        </div>

        <div id="access-img" >
          <Link to={"accessories"}>ACCESSORIES</Link>
        </div>
      </div>
    </div>
  );
};

export default Discover;
