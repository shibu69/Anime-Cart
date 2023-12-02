import React from "react";
import "./Login.css";

const LOgin = () => {
  return (
    <form action="/" id="login-form">
      <div className="loginnow">
        <h2>Login Now</h2>
        <div className="loginInfo">
          <h3>UserName</h3>
          <input type="text" placeholder="Enter your name" />
          <h3>Password</h3>
          <input type="password" placeholder="Enter your password" />
          <input type="submit" value="Login Now" />
        </div>
      </div>
    </form>
  );
};

export default LOgin;
