import React from 'react'
import { usePlayer } from './Context';

const Scoreboard = () => {
  const {score, setScore} = usePlayer()

  return ( 
    <div className="border-[3px] border-slate-500 py-4 px-2 rounded-lg flex justify-between items-center max-w-[510px] mx-auto mb-32">
      <div className="text-white font-bold flex flex-col gap-0 text-xl w-fit ml-4 md:text-2xl">
        <p className="leading-[1rem] md:leading-[1.2rem]">ROCK</p>
        <p className="leading-[1rem] md:leading-[1.2rem]">PAPER</p>
        <p className="leading-[1rem] md:leading-[1.2rem]">SCISSORS</p>
      </div>

      <div className='w-22 h-22 bg-white rounded-lg py-2 text-center px-4 mr-2'>
        <p className='text-xs font-semibold text-scoreText'>SCORE</p>
        <p className='text-5xl font-bold text-slate-500'>{score.padStart(2, "0")}</p>
      </div>
    </div>
  );
}

export default Scoreboard
