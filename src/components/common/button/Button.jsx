import React from 'react'
import './Button.css'

const Button = ({btnText, icon, iconPosition='left', btnStyle='fill', onClick}) => {
  return (
    <button className={`btn ${btnStyle} ${iconPosition === 'right' ? 'flex-row-reverse' : ''}`} onClick={onClick}>
        { icon && <div className="icon">{icon}</div> }
        <span>{btnText}</span>
    </button>
  )
}

export default Button