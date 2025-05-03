import React from "react";

const Button = ({btnText, btnType = 'button', icon, iconPosition='left', btnStyle='fill', onClick}) => {
  return (
    <button type={btnType} className={`btn ${btnStyle} ${iconPosition === 'right' ? 'flex-row-reverse' : ''}`} onClick={onClick}>
        { icon && <div className="icon">{icon}</div> }
        <span>{btnText}</span>
    </button>
  );
};

export default Button;
