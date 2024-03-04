import React from "react";
import PlayerCard from "./PlayerCard";
import { Carousel, IconButton } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/20/solid";

const PlayerCarousel = ({players})=>{
    console.log(players)
    const displayPlayers = ()=>{
        const playersCopy =[...players]
        const arr = []
        while(0 < playersCopy.length){
            const innerArr = []
            for(let i = 0; i<4; i++){
                if(!playersCopy.length) break;
                const p = playersCopy.pop()
                innerArr.push(<PlayerCard key={p.playerId} player={p}/>)
            }
            arr.push(
                (
                    <div className="w-full flex flex-wrap justify-around items-center">
                        {innerArr.map(p=>p)}
                    </div>
                )
            )
            
        }
        return arr;
    }
    return(
        <div className="w-full h-80 rounded-2xl shadow-xl bg-blue-gray-50 py-5">

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
            
            {displayPlayers()}
        </Carousel>
        
        </div>
    )
}

export default PlayerCarousel;