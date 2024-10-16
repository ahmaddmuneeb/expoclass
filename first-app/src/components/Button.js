import React from "react";
import "./components.css";

const Button = ({ buttonTitle, onPress }) => {
  return (
    <div>
      <button className="btn" onClick={onPress}>{buttonTitle}</button>
    </div>
  );
};

export default Button;
