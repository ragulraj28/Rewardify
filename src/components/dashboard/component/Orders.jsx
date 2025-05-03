import React from 'react'
import { IoReload } from "react-icons/io5";
import { BsTelephoneFill } from "react-icons/bs";
import { TfiLocationPin } from "react-icons/tfi";
const Orders = () => {
  return (
    <div className='orders'>
        <div className='orders_head'>
            <div className='head_title'>
                <h2>My Orders</h2>
                <button><IoReload className='btn_icon'/></button>
            </div>
            <p>Last Update at: June 02, 2024 | 11:25 PM</p>
            <ul>
                <li>Confirmation(no) <div className='line' ></div></li>
                <li >Preparing(no)<div className='line'></div></li>
                <li>Packed Orders(no) <div className='line' ></div></li>
                <li onMouseDown={(e) => e.preventDefault()}> Completed(no) <div className="line"></div></li>

            </ul>
        </div>
        <div className='order'>
            <div className='order_info'> 
                <p className='id' style={{color:"rgba(172, 196, 63, 1)"}}>Order Id: 12345</p>
                <p className='date' >Date: Apr 09, 2024</p>
            </div>
            <div className='order_for'>
                <h2>Order for:</h2>
                <h4 style={{marginTop:"8px"}}>Rajesh Kannan</h4>
                <div className='contact'>
                    <div className='icon'><BsTelephoneFill style={{width:"13px",height:"13px"}}/></div><p style={{borderRight:"1px solid rgba(134, 140, 154, 1)",paddingRight:"10px"}}>+918526547512</p>
                    <div className='icon'><TfiLocationPin style={{width:"13px",height:"13px"}}/></div><p>R S Puram, Coimbatore</p>
                </div>
            </div>
            <div className='order_items'>
                <h2>Order items:</h2>
                <ul>
                    <li>
                        <p className='item_name'>1 x Ooty apple</p>
                        <p className='item_cost'>{'\u20B9'}100.00</p>
                    </li>
                    <li>
                        <p className='item_name'>5 x White Egg</p>
                        <p className='item_cost'>{'\u20B9'}50.00</p>
                    </li>
                </ul>
                <div className='bill'>
                    <div className='total'>
                        <h6>Total Bill Amount</h6>
                        <div className='h6'><h6>Paid-UPI</h6></div>
                    </div>
                    <p>{'\u20B9'}150.00</p>
                </div>
                <div className='order_btn'>
                    <button className='reject_btn'>Reject Order</button>
                    <button className='confirm_btn'>Confirm Order</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Orders