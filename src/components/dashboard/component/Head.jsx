import React,{useEffect} from 'react'
import '../style/head.css'
import rewardify from '../../../assets/rewardify.png'
import goldCoin from '../../../assets/gold coin.png'
import { FaRegBell } from "react-icons/fa";
import { MdOutlinePersonOutline } from "react-icons/md";
import { FaHandHoldingDollar } from "react-icons/fa6";
import api from '../../../utils/axios/axios';


const Head = () => { 
    
    const coin_btn = {
        width: "193px",
        height: "48px",
        gap: "6px",
        borderRadius: "12px",
        paddingTop: "12px",
        paddingRight: "24px",
        paddingBottom: "12px",
        paddingLeft: "24px",
        display:"flex"
      };
  return (
    <div className='db_head'>
    <img src={rewardify} alt='rewardify' className='logo'></img>
    
    <div className='db_head_btn'>
      <h2 className='welcome_user'>Welcome, Rajesh👋</h2>
      <div className='btn'>
        <button style={coin_btn}><p className='coin_text'>XCoins: 300</p><img src={goldCoin} alt='coin'></img></button>
        <div className='three_navIcons'>
        <button><FaHandHoldingDollar /></button>
        <button><FaRegBell  /></button>
        <button><MdOutlinePersonOutline /></button>
        </div>
      </div>
    </div>
</div>
  )
}

export default Head