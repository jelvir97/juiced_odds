import React, { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import UserContext from "./UserContext";

/**
 * Renders nested routes if UserContext exists; ie user authenticated
 */
const ProtectedRoutes = ()=>{
    const UC = useContext(UserContext)
    console.log(UC.user)
    return ( UC.user ? <Outlet /> : <Navigate to="/" /> )

}

export default ProtectedRoutes;