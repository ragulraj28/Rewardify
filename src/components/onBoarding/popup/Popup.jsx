import { useEffect } from 'react'
import './Popup.css'

const Popup = ({logo, children}) => {

  return (
    <div className={`popup ${logo ? 'pt-20' : 'pt-5'}`}>
        { logo && 
            <div className="logo">
            <img src={logo} alt="popup-logo" />
            </div>
        }
        {children}
    </div>
  )
}

export default Popup