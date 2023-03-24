import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

function ProtectedRoute({ children }) {
    if(localStorage.getItem('accessToken'))
    {
        console.log({ accessToken: localStorage.getItem('accessToken') });
        if (!localStorage.getItem('accessToken')) {
            return <Navigate to='/login' />;
        }
    }
    return (
    <Outlet/>
    )
}

export default ProtectedRoute