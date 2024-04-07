import React, { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import UserContext from "./UserContext";

/**
 * Renders nested routes if UserContext exists; ie user authenticated
 */
const ProtectedRoutes = ()=>{
    const UC = useContext(UserContext)
    console.log(UC.user)
    // un-comment to protect routes
    // return ( UC.user ? <Outlet /> : <Navigate to="/" /> )

    return <Outlet />
}

export default ProtectedRoutes;