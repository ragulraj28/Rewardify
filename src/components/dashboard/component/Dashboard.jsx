import React,{useEffect} from 'react'
import api from '../../../utils/axios/axios'
import Head from './Head';
import SideBar from './SideBar';
import '../style/dashboard.css'
import Body from './Body';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../../../utils/slices/authSlice';
const Dashboard = () => {
  
  return (
    <div className='dashboard'>
        <Body/>      
    </div>
  )
}

export default Dashboard