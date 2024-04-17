import React, { useEffect, useState } from 'react'
import scissors from "../assets/images/icon-scissors.svg"
import rock from "../assets/images/icon-rock.svg"
import paper from "../assets/images/icon-paper.svg"

const RPS = ({type, addStyles}) => {
    const [image, setImage] = useState()
    const [color, setColor] = useState()

    useEffect(() => {
        if (type === "scissors") {
            setImage(scissors)
            setColor("bg-scissorsLight");
        } else if (type === "rock") {
            setImage(rock)
            setColor("bg-rockLight")
        } else if (type === "paper") {
            setImage(paper)
            setColor("bg-paperLight")
        }
    }, [])

  return (
    <div className={`w-32 h-32 p-4 rounded-full ${color} ${addStyles} md:w-40 md:h-40`}>
      <div className='w-full h-full  rounded-full bg-white flex justify-center items-center'>
        <img src={image} alt={type}/>
      </div>
    </div>
  )
}

export default RPS
