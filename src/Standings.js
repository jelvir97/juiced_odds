import React, { useState, useEffect } from "react";
import NHL_API from "./NHL_API";
import StandingsTable from "./StandingsTable";
import { Tab } from "@headlessui/react";

const Standings = () => {
  const [standings, setStandings] = useState();

  useEffect(() => {
    const getStandings = async () => {
      const s = await NHL_API.getStandings();
      setStandings(s);
    };
    getStandings();
  }, []);


  const getClasses  = (selected)=>{
                return (
                    ' rounded-2xl px-4 '+ 
                  (selected
                    ? 'bg-black text-white shadow-lg font-bold '
                    : 'text-slate-600 hover:bg-blue-gray-100 hover:scale-110 duration-300')
                )
              }

  const makeTables = (s) => {
    return (
      
        <Tab.Group>
          <Tab.List className="w-full flex justify-between rounded-2xl border-2 border-slate-400 h-16 py-1 px-4 text-xl my-4">
            <Tab className={({selected})=>getClasses(selected)}>E - Metropolitan</Tab>
            <Tab className={({selected})=>getClasses(selected)}>E - Atlantic</Tab>
            <Tab className={({selected})=>getClasses(selected)}>W - Pacific</Tab>
            <Tab className={({selected})=>getClasses(selected)}>W - Central</Tab>
          </Tab.List>
          <Tab.Panels>

            <Tab.Panel>

                <StandingsTable division={s.Eastern.Metropolitan} name />
            </Tab.Panel>

            <Tab.Panel>

                <StandingsTable division={s.Eastern.Atlantic} name />
            </Tab.Panel>

            <Tab.Panel>

                <StandingsTable division={s.Western.Pacific} name />
            </Tab.Panel>

            <Tab.Panel>

                <StandingsTable division={s.Western.Central} name />
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>

    );
  };

  return <div className="w-full px-2">{standings ? makeTables(standings) : ""}</div>;
};

export default Standings;
