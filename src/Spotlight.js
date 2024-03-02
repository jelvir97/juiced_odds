import React, {useState, useEffect} from "react";
import NHL_API from "./NHL_API";
import SpotlightPlayerCard from "./SpotlightPlayerCard";
import { Carousel, IconButton } from "@material-tailwind/react";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/20/solid";

const Spotlight = ()=>{
    const [players, setPlayers] = useState()

    useEffect(()=>{
        const getPS = async ()=>{
            const ps = await NHL_API.getSpotlight()
            setPlayers(ps)
        }
        getPS()
    },[])

    const displayPlayers = ()=>{
        let arr = []
        for(let i = 0; i<players.length; i+=2){
            arr.push(
                (
                    <div className="w-full flex-col justify-center items-center" key={players[i].playerId + players[i+1].playerId}>
                        {players[i] ?  <SpotlightPlayerCard key={players[i].playerId} player={players[i]}/>:  ""}
                        {players[i+1] ? <SpotlightPlayerCard key={players[i+1].playerId} player={players[i+1]}/>:  ""}
                    </div>
                )
            )
            
        }

        return arr;
    }

    return(
        <div className="w-80 h-136 rounded-2xl bg-blue-gray-50 py-5">
        <h1 className=" text-center text-xl
        ">Players to Watch</h1>
        <Carousel
        prevArrow={({ handlePrev }) => (
        <IconButton
          variant="text"
          size="lg"
          onClick={handlePrev}
          className="!absolute top-2/4 left-4 -translate-y-2/4"
        >
            <ArrowLeftIcon className="h-8 text-slate-300 hover:scale-110 ease-in-out"/>
        </IconButton>
      )}
      nextArrow={({ handleNext }) => (
        <IconButton
          size="lg"
          variant="text"
          onClick={handleNext}
          className="!absolute top-2/4 !right-4 -translate-y-2/4"
          
        >
            <ArrowRightIcon className="h-8 text-slate-300 hover:scale-110 ease-in-out"/>
          
        </IconButton>
      )}
    >
            
            {players ? displayPlayers(): ""}
        </Carousel>
        
        </div>
    )
}

export default Spotlight;