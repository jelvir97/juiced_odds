import React from "react";
/**
 * StandingsTableCell
 * 
 * Primarily abstracted for column highlighting
 */
const StandingsTableCell = ({data})=>{
    return (<td className="
                        hover:bg-bottom
                        
                        text-center 
                        relative 
                        hover:before:bg-orange-500/50 
                        hover:before:h-screen
                        hover:before:absolute
                        hover:before:content-center
                        hover:before:left-0
                        hover:before:-top-96
                        hover:before:w-full
                        hover:before:-z-0"
            >{data}</td>)
}

export default StandingsTableCell;
