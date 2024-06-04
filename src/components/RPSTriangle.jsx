import React from "react";
import triangle from "../assets/images/bg-triangle.svg";
import RPS from "./RPS";
import { usePlayer } from "./Context";
import { useNavigate } from "react-router";

const RPSTriangle = () => {
  const { playerChoice, setPlayerChoice } = usePlayer();
  const navigate = useNavigate()

  const handleChoice = (theChoice) => {
     setPlayerChoice(theChoice);
     navigate("result");
  }

  return (
    <div className="w-fit h-fit mx-auto mt-28 mb-24">
      <div className=" w-fit h-fit relative ">
        <div className="w-64 md:w-80">
          <img src={triangle} alt="" className="w-full h-full" />
        </div>
        <div
          className="absolute top-[-64px] left-[-32px]"
          onClick={() => {
            handleChoice("paper");
          }}
        >
          <RPS type={"paper"} />
        </div>
        <div
          className="absolute top-[-64px] right-[-32px]"
          onClick={() => {
            handleChoice("scissors");
          }}
        >
          <RPS type={"scissors"} />
        </div>
        <div className="w-full absolute bottom-[-32px] mx-auto flex items-center justify-center">
          <div
            onClick={() => {
              handleChoice("rock");
            }}
          >
            <RPS type={"rock"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RPSTriangle;
