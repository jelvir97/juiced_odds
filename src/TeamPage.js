import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import NHL_API from "./NHL_API";

import PlayerCard from "./PlayerCard";

const TeamPage = ()=>{
    const {team} = useParams()
    const [teamStats, setTeamStats] = useState()

    useEffect(()=>{
        const getTeamStats = async ()=>{
            const stats = await NHL_API.getTeamStats(team)
            setTeamStats(stats)
        }
        getTeamStats()
    },[])
    return(
        <div className="flex flex-wrap m-4">
            {teamStats ? teamStats.skaters.map( s => <PlayerCard key={s.playerId} player={s}/>) : ""}
        </div>
    )
}

export default TeamPage;