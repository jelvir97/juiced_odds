import React, {useState, useEffect} from "react";
import NHL_API from './NHL_API';
import ScheduleDay from "./ScheduleDay";
import { yesterdaysDate } from "./helpers/dateFormats";
import PredictionsContext from "./PredictionsContext";

const Schedule = ({title})=>{

    const [schedule, setSchedule] = useState()
    const [predictions, setPredictions] = useState()


    useEffect( ()=>{
      async function getSchedule(){
        const y = yesterdaysDate()
        const {gameWeek} = await NHL_API.getCurrentSchedule(y)
        const gameIDs = []
        gameWeek.forEach(day => {
            for(let game of day.games){
              gameIDs.push(game.id.toString())
            }
        });

        const p = await NHL_API.getGamePredictions(gameIDs)
        setPredictions(()=>p)
        setSchedule(()=>gameWeek)
      }
      getSchedule()

    },[])

    return (
        <div className="container col-span-2">

          <h1 className="text-2xl">{title ? title : 'Recent and Upcoming'}</h1>
          <PredictionsContext.Provider value={predictions}>
            {schedule ? schedule.map((day) =>{
                      
                      return <ScheduleDay day={day} key={day.date}/>
                      }) : ''}
          </PredictionsContext.Provider>
            
        </div>
    )
}

export default Schedule;

