import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "./UserContext";
import { Carousel, Typography, Button } from "@material-tailwind/react";
import GoogleButton from "./GoogleButton";

const HomePage = () => {
  const UC = useContext(UserContext);
  return (
    <div className="h-full w-full overflow-hidden bg-[url('/src/favicon.svg')] bg-cover bg-no-repeat">
    <Carousel className="w-screen h-screen z-50">
      <div className="relative h-full w-full overflow-hidden">
        
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              Juiced Odds
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              Bet differently.
            </Typography>
          </div>
        </div>
      </div>

      <div className="relative h-full w-full overflow-hidden">
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              Login to check it out.
            </Typography>
            <GoogleButton />
          </div>
        </div>
      </div>
    </Carousel>
    </div>
  );
};

export default HomePage;