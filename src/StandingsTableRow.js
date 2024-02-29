import React from "react";
import StandingsTableCell from "./StandingsTableCell";

const StandingsTableRow = ({team})=>{
    return (
        <tr className="grid grid-cols-12 hover:text-white hover:bg-slate-700 border-t-2 odd:bg-white even:bg-slate-50">
            <td className="col-span-4">{team.teamName.default}</td>
            <StandingsTableCell data={team.gamesPlayed}/>
            <StandingsTableCell data={team.wins}/>
            <StandingsTableCell data={team.ties}/>
            <StandingsTableCell data={team.losses}/>
            <StandingsTableCell data={team.goalFor}/>
            <StandingsTableCell data={team.goalAgainst}/>
            <StandingsTableCell data={team.points}/>
            <StandingsTableCell data={team.streakCount + team.streakCode}/>
        </tr>
    ) 
}

export default StandingsTableRow;