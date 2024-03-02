import React from "react";

import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from '@heroicons/react/20/solid'


const PredictionTable = ({predictions})=>{
    return (
        
        <Disclosure>
            
            {({ open }) => (
                <>
                <Disclosure.Button className="flex w-full justify-center transition hover:scale-110 ease-in-out">
                    <span className="text-sm text-left">Predictions</span>

                    <ChevronUpIcon
                        className={`${
                            open ? 'rotate-180 transform' : ''
                        } h-5 w-5`}
                    />
                </Disclosure.Button>

                

                <Disclosure.Panel>
                    
                    <table className="my-5">
                        
                        <tbody className="flex flex-col items-center border-ridge">

                            <tr className="grid grid-cols-6 w-10/12 items-center border-y">
                                <td className="col-span-1"></td>
                                <th className=" text-xs col-span-1">Money Line %</th>
                                <th className=" text-xs col-span-1">Money Line Odds</th>
                                <th className=" text-xs col-span-1">Model ML%</th>
                                <th className=" text-xs col-span-1">Model ML Odds</th>
                                <th className=" text-xs col-span-1">Model Expected ROI</th>
                            </tr>

                            <tr className="grid grid-cols-6 w-10/12 items-center divide-x">
                                <th className="col-span-1">Away</th>
                                <td className="text-xs text-center col-span-1">{Math.floor(predictions.awayProbMoney * 1000) / 10} %</td>
                                <td className="text-xs text-center col-span-1">{predictions.awayOddsMoney}</td>
                                <td className="text-xs text-center col-span-1">{Math.floor(predictions.awayProbModelMoney * 1000) / 10} %</td>
                                <td className="text-xs text-center col-span-1">{predictions.awayOddsModelMoney}</td>
                                <td className="text-xs text-center col-span-1">{predictions.expectedRoiAwayMoney}</td>
                            </tr>
                            <tr className="grid grid-cols-6 w-10/12 items-center divide-x">
                                <th className="col-span-1">Home</th>
                                <td className="text-xs text-center col-span-1">{Math.floor(predictions.homeProbMoney * 1000) / 10} %</td>
                                <td className="text-xs text-center col-span-1">{predictions.homeOddsMoney}</td>
                                <td className="text-xs text-center col-span-1">{Math.floor(predictions.homeProbModelMoney * 1000) / 10} %</td>
                                <td className="text-xs text-center col-span-1">{predictions.homeOddsModelMoney}</td>
                                <td className="text-xs text-center col-span-1">{predictions.expectedRoiHomeMoney}</td>
                            </tr>
                        </tbody>
                    </table>
                </Disclosure.Panel>
                </>
        )}        
        
        </Disclosure>

        
    )
}

export default PredictionTable;
