import React from "react";
import StandingsTableCell from "./StandingsTableCell";

const StandingsTableRow = ({team})=>{
    return (
        <tr className="grid grid-cols-12 rounded-2xl hover:text-white hover:bg-blue-gray-700 mt-1 py-1 px-4 odd:bg-white even:bg-blue-gray-100">
            <td className="col-span-4 font-bold">{team.teamName.default}</td>
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