import React from "react";
import "./Button.css";

const Button = ({
  btnText,
  icon,
  iconPosition = "left",
  btnStyle = "fill",
  onClick,
  type,
}) => {
  return (
    <button
      type={type}
      className={`btn ${btnStyle} ${
        iconPosition === "right" ? "flex-row-reverse" : ""
      }`}
      onClick={onClick}
    >
      {icon && <div className="icon">{icon}</div>}
      <span>{btnText}</span>
    </button>
  );
};

export default Button;
