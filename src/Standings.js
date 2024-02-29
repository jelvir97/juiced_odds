import React, {useState, useEffect} from "react";
import NHL_API from "./NHL_API";
import StandingsTable from "./StandingsTable";

const Standings = ()=>{
    const [standings, setStandings] = useState()

    useEffect(()=>{
        const getStandings = async()=>{
            const s = await NHL_API.getStandings()
            setStandings(s)
        }
        getStandings()
    },[])

    const makeTables = (s)=>{

        return (
            <div className="">
                <h1>Eastern Conference</h1>
                <h3>Metropolitan</h3>
                <StandingsTable division={s.Eastern.Metropolitan} name/>
                <h3>Atlantic</h3>
                <StandingsTable division={s.Eastern.Atlantic} name/>

                <h1>Western Conference</h1>
                <h3>Pacific</h3>
                <StandingsTable division={s.Western.Pacific} name/>
                <h3>Central</h3>
                <StandingsTable division={s.Western.Central} name/>
            </div>

        )
    }

    return (
        <div>
            {standings ? makeTables(standings) : ""}
        </div>
    )
}

export default Standings;