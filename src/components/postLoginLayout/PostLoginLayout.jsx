import { Outlet } from "react-router"
import Head from "../dashboard/component/Head"
import SideBar from "../dashboard/component/SideBar"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import api from "../../utils/axios/axios"
import { setUser } from "../../utils/slices/authSlice"

const PostLoginLayout = () => {

  const{ accessToken } = useSelector(state => state.auth);
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

    accessToken && getUser();

  }, [accessToken]);

  return (
    <div className="post-login-layout">
        <Head />
        <div className="main-wrapper">
            <div className="sidebar-wrapper">
                <SideBar />
            </div>
            <div className="outlet-container">
                <Outlet />
            </div>
        </div>
    </div>
  )
}

export default PostLoginLayout