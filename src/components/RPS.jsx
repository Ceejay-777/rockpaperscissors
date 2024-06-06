import React, { useEffect, useState } from "react";
import scissors from "../assets/images/icon-scissors.svg";
import rock from "../assets/images/icon-rock.svg";
import paper from "../assets/images/icon-paper.svg";
import { usePlayer } from "./Context";

const RPS = ({ type, addStyles, addClick }) => {
  const [image, setImage] = useState();
  const [color, setColor] = useState();
  const { playerChoice, setPlayerChoice } = usePlayer();

  useEffect(() => {
    if (type === "scissors") {
      setImage(scissors);
      setColor("bg-scissorsLight");
    } else if (type === "rock") {
      setImage(rock);
      setColor("bg-rockLight");
    } else if (type === "paper") {
      setImage(paper);
      setColor("bg-paperLight");
    }
  }, []);

  return (
    <div
      className={`w-[138px] h-[138px] p-4 md:p-6 rounded-full ${color} ${addStyles} md:w-48 md:h-48 hover:scale-105`}
      onClick={() => {
        setPlayerChoice(type);
        if (addClick) {
          addClick.forEach((addFunc) => addFunc());
        }
      }}
    >
      <div className="w-full h-full rounded-full bg-white flex justify-center items-center">
        <img src={image} alt={type} />
      </div>
    </div>
  );
};

export default RPS;
