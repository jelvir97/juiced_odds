import React, {useContext} from "react";
import PredictionsContext from "./PredictionsContext";
import PredictionTable from "./PredictionTable"
import User from "./User_API";
import UserContext from "./UserContext";

import logos from './logos.json'

const GameCard = ({game})=>{
    const away = game.awayTeam
    const home = game.homeTeam

    const predictions = useContext(PredictionsContext)
    const UC = useContext(UserContext)

    const status = {
        'OFF' : "PAST",
        "FUT" : "UPCOMING",
        "LIVE" : "LIVE",
        "FINAL": "FINAL"
    }

    const trackGame = async(gameID)=>{
        const status = await User.trackNHL(gameID)
        if(status !== 201) return

        const newUser = {
            ...UC.user,
            nhlGames: [...UC.user.nhlGames, gameID.toString()]
        }

        UC.setUser(()=>({
            ...UC,
            user: newUser
        }))
    };

    const untrackGame = async(gameID)=>{
        const status = await User.untrackNHL(gameID)
        if(status !== 200) return

        const newUser = {
            ...UC.user,
            nhlGames: UC.user.nhlGames.filter((id)=> id !==gameID.toString())
        }

        UC.setUser(()=>({
            ...UC,
            user: newUser
        }))
    };

    return (
        <div className="flex flex-col items-center align-middle rounded-2xl mt-1 odd:bg-blue-gray-100 py-2 relative w-full">
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

            
            {UC.user.nhlGames.includes(game.id.toString()) ? 
                <button onClick={()=>untrackGame(game.id)}>Untrack</button>
                : <button onClick={()=>trackGame(game.id)}>track</button> }
        </div>
    )
}

export default GameCard;
