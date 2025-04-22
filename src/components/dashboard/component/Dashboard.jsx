import React,{useEffect} from 'react'
import api from '../../../utils/axios/axios'
import Head from './Head';
import SideBar from './SideBar';
import '../style/dashboard.css'
import Body from './Body';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../../../utils/slices/authSlice';
const Dashboard = () => {

  const{ accessToken, refreshToken } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  
  useEffect(() => {

    const getUser = async () => {
      try {
        const user = await api.get('/v1/store-user/store/user');
        dispatch(setUser(user?.data));
      } catch (err) {
        console.error(err);
      }
    };
    refreshToken && getUser();

  }, [accessToken]);
  
  return (
    <div className='dashboard'>
        <Body/>      
    </div>
  )
}

export default Dashboard