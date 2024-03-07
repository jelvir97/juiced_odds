import React, {useState, useEffect, useContext} from "react";
import ScheduleDay from "./ScheduleDay";

/**
 * Schedule Component
 * 
 * Renders list of ScheduleDay components
 */
const Schedule = ({title, schedule})=>{
    return (
        <div className="w-full">

          <h1 className="text-2xl">{title ? title : 'Recent and Upcoming'}</h1>
          
            {schedule ? schedule.map((day) =>{
                      
                      return <ScheduleDay day={day} key={day.date}/>
                      }) : ''}
            
        </div>
    )
}

export default Schedule;

