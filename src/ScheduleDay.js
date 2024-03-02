import React, { useState, useEffect } from "react";
import NHL_API from "./NHL_API";
import GameCard from "./GameCard";

import { Disclosure } from "@headlessui/react";

const ScheduleDay = ({ day }) => {
  return (
    <div className="mt-1">
      <Disclosure >
        <Disclosure.Button className="p-2 bg-gray-200 w-full border-solid rounded-xl hover:bg-blue-gray-400">
          <h2 className=" font-bold text-xl text-left">{day.dayAbbrev}  {day.date.substring(5)}</h2>
        </Disclosure.Button>
        <Disclosure.Panel className="text-gray-500">
          <div className="rounded-xl">
            {day.games.map((g) => (
              <GameCard key={g.id} game={g} />
            ))}
          </div>
        </Disclosure.Panel>
      </Disclosure>
    </div>
  );
};

export default ScheduleDay;
