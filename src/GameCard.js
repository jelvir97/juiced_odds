import React, {useState, useEffect} from "react";
import NHL_API from './NHL_API';

import logos from './logos.json'

const GameCard = ({game})=>{
    const away = game.awayTeam
    const home = game.homeTeam

    const status = {
        'OFF' : "PAST",
        "FUT" : "UPCOMING",
        "LIVE" : "LIVE"
    }

    return (
        <div className="flex flex-col items-center align-middle border-solid border-2 border-gray-200 py-2 relative">
            <span className={"absolute top-4 left-4 "+ (game.gameState ==="LIVE" ? "text-green-500 underline bold" : "")}>&#8226; {status[game.gameState]}</span>
            <div className="flex items-center">
                
                <div className="grid grid-cols-1 justify-items-center">
                    <img src={logos[away.abbrev]} className="w-14 max-h-16 place-self-start"/>
                    <h2 className="font-bold mt-3 place-self-center">{away.abbrev} </h2>
                </div>
                <h1 className="font-bold mx-5">&#64;</h1>
                <div className="grid grid-cols-1 justify-items-center">
                    <img src={logos[home.abbrev]} className="w-14 max-h-16 place-self-start"/>
                    <h2 className="font-bold mt-3 place-self-center">{home.abbrev}</h2>
                </div>
                
                
            </div>

        </div>
    )
}

export default GameCard;
