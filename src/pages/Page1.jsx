import React, { useEffect } from 'react'
import Scoreboard from '../components/Scoreboard'
import RPSTriangle from '../components/RPSTriangle'
import Rules from '../components/Rules'
import { usePlayer } from '../components/Context'

const Page1 = () => {
  const {playerChoice} = usePlayer();

  return (
    <div className='h-screen flex flex-col justify-between items-center p-6 min-h-[590px]'>
        <Scoreboard />
        <RPSTriangle />
        <Rules />
    </div>
  )
}

export default Page1
