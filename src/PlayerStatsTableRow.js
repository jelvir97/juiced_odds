import React from "react";
/**
 * PlayerStatsTableRow Component
 * 
 * Renders header and data in a row.
 */
const PlayerStatsTableRow = ({header, data})=>{
    return(
        <tr className="odd:bg-white even:bg-slate-50"> 
            <th className='col-span-3 pl-2'>{header}</th> 
            <td className=' text-right pr-2'>{data}</td> 
        </tr>
    )
}

export default PlayerStatsTableRow;