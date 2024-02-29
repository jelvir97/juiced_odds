import React, {useState, useEffect} from "react";
import NHL_API from './NHL_API';
import ScheduleDay from "./ScheduleDay";

const Schedule = ()=>{

    const [schedule, setSchedule] = useState()

    useEffect( ()=>{
      async function getSchedule(){
        const {gameWeek} = await NHL_API.getCurrentSchedule()
        setSchedule(gameWeek)
      }
      getSchedule()
    },[])

    return (
        <div className="container">
            {schedule ? schedule.map((day) =>{
                    
                    return <ScheduleDay day={day} key={day.date}/>
                    }) : ''}
        </div>
    )
}

export default Schedule;

