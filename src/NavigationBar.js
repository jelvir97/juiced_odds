import React from "react";
import {NavLink} from "react-router-dom"
import logo from "../src/orange-svgrepo-com.png"


const NavigationBar = ()=>{
    return (

            <nav className="flex justify-evenly items-center bg-orange-400 h-20">
                <NavLink  to="/" className="absolute"><img src={logo} className="fixed top-2 left-2 max-h-16"/></NavLink>                
                <NavLink  to="/teams" className="mx-3 font-bold hover:text-white">Teams</NavLink>
                <NavLink  to="/standings" className="mx-3 font-bold hover:text-white">Standings</NavLink>
                <NavLink  to="/schedule" className="mx-3 font-bold hover:text-white">Schedule</NavLink>
                <NavLink  to="/profile" className="mx-3 font-bold hover:text-white">Profile</NavLink>
                
            </nav>

    )
}

export default NavigationBar;