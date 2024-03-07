import React from "react";
import logos from "./logos.json"
import { Link } from "react-router-dom"

/**
 * SpotlightPlayerCard
 * 
 * Renders player photo, sweater number.
 * 
 * Links to team players page.
 */
const SpotlightPlayerCard = ({player})=>{
    return(
            

            
            <div className="flex relative flex-col justify-center items-center bg-transparent rounded-2xl h-52 m-4 p-4
                        transition ease-in-out hover:scale-125 hover:-z-0 duration-300">
                <Link to={"/" + player.teamTriCode + "/stats"}>
                <img src={logos[player.teamTriCode]} className="h-6 absolute top-5 left-16"/>
                <img src={player.headshot} className=" rounded-full h-32 bg-stone-50 shadow-xl"/>
                <h1 className="text-center">{player.name.default}</h1>

                <div className="flex justify-center gap-4">
                    <span className=" font-bold ">{player.position}</span>
                    <span className=""> #{player.sweaterNumber}</span>
                </div>
                </Link>
            </div>

           
  

    )
}

export default SpotlightPlayerCard;