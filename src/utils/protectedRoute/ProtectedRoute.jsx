import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router'

const ProtectedRoute = ({ children }) => {
  const accessToken = useSelector((state) => state.auth?.accessToken)
  const location = useLocation()

  if (!accessToken) {
    return <Navigate to="/" state={{ from: location }} replace />
  }

  return children
}

export default ProtectedRoute
