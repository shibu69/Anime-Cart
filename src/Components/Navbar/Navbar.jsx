import React from "react";
import Logo from "../Images/CART.png";
import { Link } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div id="container">
      <div className="logo">
        <Link>
          <img src={Logo} alt="Cart Nova" />
        </Link>
      </div>

      <div className="navigation">
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"men-item"}>Men</Link>
          </li>
          <li>
            <Link to={"women-item"}>Women</Link>
          </li>
          <li>
            <Link to={"accessories"}>Accessories</Link>
          </li>
          <li>
            <Link to={"contact"}>Contact Us</Link>
          </li>
        </ul>
      </div>

      <div className="userInfo">
        <div className="logos">
          
            <FaRegUser size={25} id="join-button" />
          
        </div>

        <div className="join-drop-contain">
          <Link to={"login"}><button>LOGIN</button></Link>
          <h3>OR</h3>
          <Link to={"sign-up"}><button>SIGNUP</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
