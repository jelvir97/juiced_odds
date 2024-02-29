import React from "react";
import StandingsTableRow from "./StandingsTableRow";

const StandingsTable = ({division})=>{
    return (
        <table className="w-full border-collapse border border-slate-500 overflow-hidden">
            <thead>
            <tr className="grid grid-cols-12 group-hover:bg-lime-200 z-20">
                <th className="border border-slate-600 col-span-4 ">Team</th>
                <th className="border border-slate-600 col-span-1">GP</th>
                <th className="border border-slate-600">W</th>
                <th className="border border-slate-600">T</th>
                <th className="border border-slate-600">L</th>
                <th className="border border-slate-600">GF</th>
                <th className="border border-slate-600">GA</th>
                <th className="border border-slate-600">P</th>
                <th className="border border-slate-600">STRK</th>
            </tr>
            </thead>

            <tbody>
                {division.map( t => <StandingsTableRow key={t.teamAbbrev.default} team={t}/>)}
            </tbody>
        </table>
    )
}

export default StandingsTable;