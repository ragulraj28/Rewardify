import React from 'react'
import '../style/Transaction.css'
import { MdOutlinePersonOutline } from "react-icons/md";

const AllTransaction = ({ph_no,paid_time,paid_date,time,payment_method}) => {

  
  return (
    <div className='allTransaction'>
            <div className='payment'>
                <div className='payment_logo'>
                    <button><MdOutlinePersonOutline /></button>
                </div>
                <div className='payment_info'>
                    <h4>+91{ph_no}<span>Send a Payment</span></h4>
                    <p>Paid on {paid_date}, 2024 at {paid_time}</p>
                    <div className='h6'><h6>Paid via {payment_method}</h6></div>
                    <p style={{color: "rgba(134, 140, 154, 1)"}}>{time} ago</p>
                </div>
                
            </div>
            <div className='rupees'>+{'\u20B9'}500.00</div>

            
    </div>
  )
}

export default AllTransaction