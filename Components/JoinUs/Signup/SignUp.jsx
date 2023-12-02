import React from "react";
import "./SignUp.css";

const SignUp = () => {
  return (
    <form action="/" id="signUpForm">
      <div className="signup">
        <h2>SIGNUP NOW</h2>
        <div className="signUpInfo">
          <h3>Name</h3>
          <input placeholder="Enter your name" type="text" />
          <h3>UserName</h3>
          <input placeholder="Enter your name" type="text" />
          <h3>E-mail</h3>
          <input placeholder="Enter your E-mail" type="email" />
          <h3>Password</h3>
          <input placeholder="Enter your password" type="password" />
          <h3>Mobile No.</h3>
          <input placeholder="Enter your number" type="tel" />
          <input type="submit" value={"Sign Up"} />
        </div>
      </div>
    </form>
  );
};

export default SignUp;
