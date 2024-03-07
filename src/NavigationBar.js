import React, {useContext} from "react";
import {NavLink} from "react-router-dom"
import logo from "../src/orange-svgrepo-com.png"
import GoogleButton from "./GoogleButton";
import UserContext from "./UserContext";

/**
 * NavigationBar Component
 * 
 * Renders Links based off of UserContext
 * 
 * No context- renders only Sign in with Google Button
 */
const NavigationBar = ()=>{
    const UC = useContext(UserContext)
    return (

            <nav className="flex justify-evenly items-center bg-orange-400 h-20 z-50 relative">
                <NavLink  to="/" className="absolute"><img src={logo} className="fixed top-2 left-2 max-h-16 z-50 
                                            transition ease-in-out hover:scale-125 hover:translate-x-1 hover:translate-y-1 duration-300"/></NavLink>                
                

                {UC.user ? (<>
                                
                                <NavLink  to="/dash" className="mx-3 font-bold hover:text-white
                                                    transition ease-in-out hover:scale-125 duration-300">Dashboard</NavLink>              
                                <NavLink  to="/teams" className="mx-3 font-bold hover:text-white
                                                transition ease-in-out hover:scale-125 duration-300">Teams</NavLink>
                                <NavLink  to="/standings" className="mx-3 font-bold hover:text-white
                                                    transition ease-in-out hover:scale-125 duration-300">Standings</NavLink> 
                                <button onClick={(evt)=>UC.logout(evt,UC.setUser)} className="mx-3 font-bold hover:text-white
                                                    transition ease-in-out hover:scale-125 duration-300">Logout</button> 
                            </>)
                                                    
                            : <div className="absolute right-8 top-5"><GoogleButton /></div>}

                
                
            </nav>

    )
}

export default NavigationBar;