import React from "react"
import GameCard from "./GameCard"

/**
 * Tracked Games Component
 * 
 * List of GameCards.
 */
const TrackedGames = ({games})=>{
    return(
        <div>
            <h1 className="text-2xl border-b">Tracked</h1>
            {games.map((g)=> <GameCard key={g.id} game={g} />)}
        </div>
    )
}

export default TrackedGames;