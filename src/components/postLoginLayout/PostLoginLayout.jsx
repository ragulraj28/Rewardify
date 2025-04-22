import { Outlet } from "react-router"
import Head from "../dashboard/component/Head"
import SideBar from "../dashboard/component/SideBar"
import './PostLoginLayout.css'

const PostLoginLayout = () => {
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