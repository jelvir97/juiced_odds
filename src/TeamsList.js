import React, {useState, useEffect} from "react";
import NHL_API from "./NHL_API";
import TeamCard from "./TeamCard";

const TeamsList = ()=>{
    const [teams, setTeams] = useState()

    useEffect(()=>{
        const getTeams = async ()=>{
            const t = await NHL_API.getTeamsList()
            setTeams(t)
        }
        getTeams()
    },[])

    return(
        <div className="grid grid-flow-row-dense grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full">
            {teams ? teams.map( t => <TeamCard key={t.triCode} abbrev={t.triCode}/>) : ''}
        </div>
    )
}

export default TeamsList;