import React from "react"
import GameCard from "./GameCard"

const TrackedGames = ({games})=>{
    console.log(games)
    return(
        <div>
            <h1 className="text-2xl border-b">Tracked</h1>
            {games.map((g)=> <GameCard key={g.id} game={g} />)}
        </div>
    )
}

export default TrackedGames;