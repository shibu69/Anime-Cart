import React from "react";
import "../FootBanner/FootBanner.css";
import footener from "../../Images/footbanner.webp";

const FootBanner = () => {
  return (
    <div id="footbanner-container">
      <img src={footener} alt="Model" />

      <div className="footbanner-para">
        <p>#SUMMER COLLECTION 2024</p>

        <h1>NEW T-SHIRTS</h1>
      </div>
    </div>
  );
};

export default FootBanner;
