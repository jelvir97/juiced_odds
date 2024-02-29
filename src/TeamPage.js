import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import NHL_API from "./NHL_API";

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
        <div>
            {teamStats ? teamStats.skaters.map( s => <h1>{s.firstName.default} {s.lastName.default}</h1>) : ""}
        </div>
    )
}

export default TeamPage;