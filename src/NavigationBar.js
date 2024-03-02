import React from "react";
import {NavLink} from "react-router-dom"
import logo from "../src/orange-svgrepo-com.png"


const NavigationBar = ()=>{
    return (

            <nav className="flex justify-evenly items-center bg-orange-400 h-20 z-50">
                <NavLink  to="/" className="absolute"><img src={logo} className="fixed top-2 left-2 max-h-16 z-50 
                                            transition ease-in-out hover:scale-125 hover:translate-x-1 hover:translate-y-1 duration-300"/></NavLink>                
                <NavLink  to="/dash" className="mx-3 font-bold hover:text-white
                                                    transition ease-in-out hover:scale-125 duration-300">Dashboard</NavLink>              
                <NavLink  to="/teams" className="mx-3 font-bold hover:text-white
                                                transition ease-in-out hover:scale-125 duration-300">Teams</NavLink>
                <NavLink  to="/standings" className="mx-3 font-bold hover:text-white
                                                    transition ease-in-out hover:scale-125 duration-300">Standings</NavLink>
                <NavLink  to="/profile" className="mx-3 font-bold hover:text-white
                                                    transition ease-in-out hover:scale-125 duration-300">Profile</NavLink>
                
            </nav>

    )
}

export default NavigationBar;