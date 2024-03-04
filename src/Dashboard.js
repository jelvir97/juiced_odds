import React, {useState, useEffect, useContext} from "react";
import Schedule from "./Schedule";
import Spotlight from "./Spotlight";
import TrackedGames from "./TrackedGames";
import NHL_API from './NHL_API';
import { yesterdaysDate } from "./helpers/dateFormats";
import PredictionsContext from "./PredictionsContext";
import UserContext from "./UserContext";
import TrackedContext from "./TrackedContext";

const Dashboard = ()=>{

    const [schedule, setSchedule] = useState()
    const [predictions, setPredictions] = useState()
    const [tracked, setTracked] = useState()

    const UC = useContext(UserContext)

    useEffect( ()=>{
      async function getSchedule(){
        const y = yesterdaysDate()
        const {gameWeek} = await NHL_API.getCurrentSchedule(y)
        const gameIDs = []
        const t= []
        gameWeek.forEach(day => {
            for(let game of day.games){
              gameIDs.push(game.id.toString())
              if(UC.user.nhlGames.includes(game.id.toString())) t.push(game)  
            }
        });
        const p = await NHL_API.getGamePredictions(gameIDs)
        setPredictions(()=>p)
        setSchedule(()=>gameWeek)
        setTracked(()=>t)
      }
      getSchedule()

    },[])


    return(
        <TrackedContext.Provider value={{tracked, setTracked}}>
            <PredictionsContext.Provider value={predictions}>
            <div className="w-full grid grid-flow-row-dense grid-cols-3 grid-rows-1 h-full gap-7 py-4 px-4">
                <div className="w-full h-full col-span-2 flex flex-col divide-y-2 gap-8">
                    {tracked ? <TrackedGames games={tracked}/> :"loading"}
                    <Schedule schedule={schedule}/>
                </div>
                
                <Spotlight />
                
            </div>
            </PredictionsContext.Provider>
        </TrackedContext.Provider>

    )
}

export default Dashboard;