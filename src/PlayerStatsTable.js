import React from "react";
import PlayerStatsTableRow from "./PlayerStatsTableRow";

/**
 * Player Stats Table
 * 
 * Renders Player Stats
 */
const PlayerStatsTable = ({player})=>{
    return(
        <>
            <table className="mr-10 w-1/5 h-3/4">
                <tbody className=' columns-4 '>
                    < PlayerStatsTableRow header={"Games Played"} data={player.gamesPlayed} />
                    < PlayerStatsTableRow header={"Goals"} data={player.goals} />
                    < PlayerStatsTableRow header={"Assists"} data={player.assists} />
                    < PlayerStatsTableRow header={"Shots"} data={player.shots} />
                    < PlayerStatsTableRow header={"Shot %"} data={Math.floor(player.shootingPctg *10000) / 100 + "%"} />
                </tbody>
            </table>

            <table className="mr-10 w-1/5 h-3/4">
                <tbody className=' columns-4 '>
                    < PlayerStatsTableRow header={'Power Play G'} data={player.powerPlayGoals} />
                    < PlayerStatsTableRow header={'Shorthanded G'} data={player.shorthandedGoals} />
                    < PlayerStatsTableRow header={"Game Winning G"} data={player.gameWinningGoals} />
                    < PlayerStatsTableRow header={'Over Time G'} data={player.overtimeGoals} />
                    < PlayerStatsTableRow header={"+/-"} data={player.plusMinus} />
                </tbody>
            </table>

            <table className="w-3/12 h-3/4">
                <tbody className=' columns-4 '>
                    < PlayerStatsTableRow header={"Avg Time on Ice"} data={Math.round(player.avgTimeOnIcePerGame / 60) + "min"} />
                    < PlayerStatsTableRow header={"Avg Shifts"} data={Math.round(player.avgShiftsPerGame)} />
                    < PlayerStatsTableRow header={"Faceoff Win %"} data={Math.floor(player.faceoffWinPctg *10000) / 100 + "%"}/>
                    < PlayerStatsTableRow header={"Penalty Mins"} data={player.penaltyMinutes} />
                    < PlayerStatsTableRow header={"Points"} data={player.points} />
                </tbody>

            </table>
        </>
    )
}

export default PlayerStatsTable;