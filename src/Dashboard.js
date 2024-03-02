import React from "react";
import Schedule from "./Schedule";
import Spotlight from "./Spotlight";
const Dashboard = ()=>{
    return(
        <div className="w-full grid grid-flow-row-dense grid-cols-3 grid-rows-1 h-full gap-7">
            <Schedule />
            <Spotlight />
        </div>

    )
}

export default Dashboard;