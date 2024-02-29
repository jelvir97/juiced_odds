import React from "react";
import logos from "./logos.json";
import { Link } from "react-router-dom";

const TeamCard = ({ abbrev }) => {
  return (
    <Link to={`/${abbrev}/stats`}>
      <div className="rounded-xl bg-gray-200 flex justify-left m-1 p-2 items-center hover:bg-slate-400">
        <img
          src={logos[abbrev]}
          className="col-span-1 max-w-12 max-h-10 ml-3 mr-5"
        />
        <h1 className="bold">{abbrev}</h1>
      </div>
    </Link>
  );
};

export default TeamCard;
