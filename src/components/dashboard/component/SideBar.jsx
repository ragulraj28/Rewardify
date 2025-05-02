import React from 'react'
import '../style/sidebar.css'
import { useDispatch, useSelector } from 'react-redux';
import shop from '../../../assets/shop.png'
import { MdOutlineDashboard } from "react-icons/md";
import { BsTruck } from "react-icons/bs";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { MdOutlinePersonOutline } from "react-icons/md";
import { BiBorderRadius } from 'react-icons/bi';
import { Link } from 'react-router';
import useResize from '../../../utils/hooks/useResize';
import { toggleSidebar } from '../../../utils/slices/sidebarSlice';
const SideBar = () => {
  
  const {selectedStore}=useSelector((states)=>states.store);
  const storeName=selectedStore?.name?.split(" ").slice(0,2).join(" ");
  const storeImg=selectedStore?.images;
  const storeid=selectedStore?._id;
  const active = useSelector(state => state.sidebar?.active);
  const winwidth = useResize();
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(toggleSidebar());
  }

  return (
    <div className={`SideBar ${(active && winwidth < 1536) && 'active'}`}>
        <div className='shopDetail'>
            <div className='img'><img src={storeImg} alt='shop' style={{borderRadius:"8px"}}></img></div>
            <select><option>{storeName}</option></select>
            <p>Shop ID:{storeid}</p>
        </div>
        <div className='sb_links'>
          <ul>
            <li><Link to={'dashboard'} onClick={handleClick}><MdOutlineDashboard /><p>dashboard</p></Link></li>
            <li><Link to={'orders/confirmation'} onClick={handleClick}><BsTruck /><p>Orders</p></Link></li>
            <li><Link to={'products'} onClick={handleClick}><MdOutlineAddShoppingCart /><p>My Products</p></Link></li>
            <li><Link to={'profile'} onClick={handleClick}><MdOutlinePersonOutline /><p>Profile</p></Link></li>
          </ul>
        </div>
    </div>
  )
}

export default SideBar