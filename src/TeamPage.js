import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import NHL_API from "./NHL_API";
import PlayerCarousel from "./PlayerCarousel";
import logos from "./logos.json"


const TeamPage = ()=>{
    const {team} = useParams()
    const [teamStats, setTeamStats] = useState()
    
    const [centers, setCenters] = useState()
    const [defense, setDefense] = useState()
    const [wingers, setWingers] = useState()
    useEffect(()=>{
        const getTeamStats = async ()=>{
            const stats = await NHL_API.getTeamStats(team)
            setTeamStats(()=> stats)
            setCenters(() => stats.skaters.filter(p => p.positionCode === "C"))
            setDefense(() => stats.skaters.filter(p => p.positionCode === "D"))
            setWingers(() => stats.skaters.filter(p => p.positionCode === "R" || p.positionCode === "L"))
            
        }
        getTeamStats()

    },[])
    return(
        <div className="w-11/12 pt-4">
            <h1 className="text-3xl font-extrabold"><img className="h-14 inline mr-5" src={logos[team]} /> {team}</h1>
            {teamStats ? <> 
                            <h1 className="text-2xl font-bold mt-4 mb-2">Centers</h1>
                            <PlayerCarousel players={centers}/> 
                            <h1 className="text-2xl font-bold mt-4 mb-2">Wingers</h1>
                            <PlayerCarousel players={wingers}/> 
                            <h1 className="text-2xl font-bold mt-4 mb-2">Defensemen</h1>
                            <PlayerCarousel players={defense}/> 
                            <h1 className="text-2xl font-bold mt-4 mb-2">Goalies</h1>
                            <PlayerCarousel players={teamStats.goalies}/> 

                        </> 
                 : 
                
                ""} 
        </div>
    )
}

export default TeamPage;