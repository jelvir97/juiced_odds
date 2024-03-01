import React from "react";
import StandingsTableRow from "./StandingsTableRow";

const StandingsTable = ({division})=>{
    return (
        <table className="w-full border-collapse my-4 overflow-hidden">
            <thead>
            <tr className="grid grid-cols-12 bg-slate-300 rounded-2xl py-2 px-4 z-20 text-lg">
                <th className=" col-span-4 ">Team</th>
                <th className=" col-span-1">GP</th>
                <th className="">W</th>
                <th className="">T</th>
                <th className="">L</th>
                <th className="">GF</th>
                <th className="">GA</th>
                <th className="">P</th>
                <th className="">STRK</th>
            </tr>
            </thead>

            <tbody>
                {division.map( t => <StandingsTableRow key={t.teamAbbrev.default} team={t}/>)}
            </tbody>
        </table>
    )
}

export default StandingsTable;