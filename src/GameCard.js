import React, {useContext} from "react";
import PredictionsContext from "./PredictionsContext";
import PredictionTable from "./PredictionTable"


import logos from './logos.json'

const GameCard = ({game})=>{
    const away = game.awayTeam
    const home = game.homeTeam

    const predictions = useContext(PredictionsContext)

    const status = {
        'OFF' : "PAST",
        "FUT" : "UPCOMING",
        "LIVE" : "LIVE",
        "FINAL": "FINAL"
    }

    return (
        <div className="flex flex-col items-center align-middle rounded-2xl mt-1 odd:bg-slate-100 py-2 relative w-7/12">
            <span className={"absolute top-4 left-4 "+ (game.gameState ==="LIVE" ? "text-green-500 underline bold" : "")}>&#8226; {status[game.gameState]}</span>
            <div className="flex items-center">

                <div className="grid grid-cols-1 justify-items-center">
                    <img src={logos[away.abbrev]} className="w-14 max-h-16 place-self-start"/>
                    <h2 className="font-bold mt-3 place-self-center">{away.abbrev} </h2>
                </div>
                <span className=" text-3xl font-extrabold mx-6">{away.score}</span>
                <h1 className="font-bold mx-5">&#64;</h1>
                <span className=" text-3xl font-extrabold mx-6">{home.score}</span>
                <div className="grid grid-cols-1 justify-items-center">
                    <img src={logos[home.abbrev]} className="w-14 max-h-16 place-self-start"/>
                    <h2 className="font-bold mt-3 place-self-center">{home.abbrev}</h2>
                </div>

                
                
                
            </div>


                {predictions[game.id] ? <PredictionTable predictions={predictions[game.id]}/> : ''}

            

        </div>
    )
}

export default GameCard;
