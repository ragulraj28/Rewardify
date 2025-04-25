import React from 'react'
import '../style/head.css'
import rewardify from '../../../assets/rewardify.png'
import goldCoin from '../../../assets/gold coin.png'
import { FaRegBell } from "react-icons/fa";
import { MdOutlinePersonOutline } from "react-icons/md";
import { FaHandHoldingDollar } from "react-icons/fa6";
import { useDispatch, useSelector } from 'react-redux';
import { MenuIcon } from '../../../assets/icons/icon';
import { toggleSidebar } from '../../../utils/slices/sidebarSlice';

const Head = () => { 

  const{ user } = useSelector(state => state.auth);
  const dispatch = useDispatch()

  const coin_btn = {
      
      gap: "6px",
      borderRadius: "12px",
      paddingTop: "12px",
      paddingRight: "24px",
      paddingBottom: "12px",
      paddingLeft: "24px",
      display:"flex"
  };
  const icon_btn={
    width:"22px",
    height:"22px"
  }
  const menuToggle = () => {
    dispatch(toggleSidebar());
  }

  return (
    <div className='db_head container mx-auto'>
      <div className="menu-toggle"><MenuIcon onClick={menuToggle}/></div>
    <img src={rewardify} alt='rewardify' className='logo'></img>
    
    <div className='db_head_btn'>
      <h2 className='welcome_user'>Welcome, {user?.name}👋</h2>
      <div className='btn'>
        <button style={coin_btn}><p className='coin_text'>XCoins: 300</p><img src={goldCoin} alt='coin'></img></button>
        <div className='three_navIcons'>
        <button><FaHandHoldingDollar style={icon_btn}/></button>
        <button><FaRegBell style={icon_btn} /></button>
        <button><MdOutlinePersonOutline style={icon_btn}/></button>
        </div>
      </div>
    </div>
</div>
  )
}

export default Head
