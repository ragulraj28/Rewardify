import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet, useLocation } from 'react-router';

const ProtectedRoute = () => {

    const accessToken = useSelector(state => state.auth.accessToken);
    const location = useLocation();

    if(!accessToken) {
        return <Navigate to={'/'} state={{ from: location}} replace />
    }
 
    return <Outlet />;

}

export default ProtectedRoute