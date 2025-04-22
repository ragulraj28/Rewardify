import React from 'react'
import '../style/sidebar.css'
import { useSelector } from 'react-redux';
import shop from '../../../assets/shop.png'
import { MdOutlineDashboard } from "react-icons/md";
import { BsTruck } from "react-icons/bs";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { MdOutlinePersonOutline } from "react-icons/md";
import { BiBorderRadius } from 'react-icons/bi';
import { Link } from 'react-router';
const SideBar = () => {
    const auth=useSelector((states)=>states.auth);
    console.log(auth.stores[1]);
    const store=auth?.stores[1];
    const storeName=store?.name?.split(" ").slice(0,2).join(" ");
    const storeImg=store?.images;
    
    
  return (
    <div className='SideBar'>
        <div className='shopDetail'>
            <div className='img'><img src={storeImg} alt='shop' style={{borderRadius:"8px"}}></img></div>
            <select><option>{storeName}</option></select>
            <p>Shop ID: 123456789</p>
        </div>
        <div className='sb_links'>
          <ul>
            <li><Link to={'dashboard'}><MdOutlineDashboard /><p>dashboard</p></Link></li>
            <li><Link to={'orders'}><BsTruck /><p>Orders</p></Link></li>
            <li><Link to={'products'}><MdOutlineAddShoppingCart /><p>My Products</p></Link></li>
            <li><Link to={'profile'}><MdOutlinePersonOutline /><p>Profile</p></Link></li>
          </ul>
        </div>
    </div>
  )
}

export default SideBar