import { Dialog, Transition } from '@headlessui/react'
import React, { Fragment,useState } from 'react'
import PlayerStatsTable from './PlayerStatsTable'

const PlayerCard = ({player})=>{
    const [isOpen, setIsOpen] = useState(false)

    function closeModal() {
      setIsOpen(false)
    }
  
    function openModal() {
      setIsOpen(true)
    }

    return(
        <>
        <div 
            onClick={openModal}
            className="flex flex-col justify-center items-center bg-slate-300 rounded-2xl h-52 w-52 m-4 p-4
                        transition ease-in-out hover:scale-110 hover:bg-slate-400 shadow-xl">

            <img src={player.headshot} className=" rounded-full h-32 bg-stone-50"/>
            <h1 className="">{player.firstName.default} {player.lastName.default}</h1>

            <div className="flex justify-between">
                 <span className=" font-bold">{player.positionCode}</span>
                 <span className=" mx-4"><span className="font-bold">GF: </span> {player.goals}</span>
                 <span className=""><span className="font-bold">A: </span> {player.assists}</span>
            </div>
        </div>


      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-3/4 h-112 transform overflow-hidden rounded-2xl bg-white p-8 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-2xl font-semibold leading-6 text-gray-900"
                  >
                    {player.firstName.default} {player.lastName.default} - {player.positionCode}

                    <button
                      type="button"
                      className="absolute right-5 justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      &#10005;
                    </button>

                  </Dialog.Title>
                  <div className=" mt-5 flex items-center h-5/6">
                    <img src={player.headshot} className=" rounded-full h-56 bg-stone-50 mr-16"/>
                    <PlayerStatsTable player={player} />
                  </div>


                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>

        </>
    )
}

export default PlayerCard;