import React from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { useAuth } from '../hook/useAuth';

const RequireAuth = () => {
    const location = useLocation();
    const { user } = useAuth();

    if (!user) {
        return <Navigate to='/login' state={{ from: location }} />
    }

    return <Outlet />;
}

export default RequireAuth
