import React, { useEffect, useRef, useState } from "react";
import Scoreboard from "../components/Scoreboard";
import RPS from "../components/RPS";
import { usePlayer } from "../components/Context";
import Rules from "../components/Rules";
import { compareChoices, computerChoice } from "../computerchoice";
import PlayAgain from "../components/PlayAgain";
import RulesModal from "../components/RulesModal";

const Page2 = () => {
  const { playerChoice, setPlayerScore, playerScore } = usePlayer();
  const [compChoice] = useState(computerChoice());
  const [showCompChoice, setShowCompChoice] = useState(false);
  const [result, setResult] = useState("");
  const resultRef = useRef();

  useEffect(() => {
    let showTimeout = setTimeout(() => {
      setShowCompChoice(true);
    }, 3000);

    let resultTimeout = setTimeout(() => {
      resultRef.current = compareChoices(playerChoice, compChoice);
      if (resultRef.current === "YOU WIN") {
        setPlayerScore((parseInt(playerScore) + 1).toString());
      } else if (resultRef.current === "YOU LOSE" && playerScore >= 1) {
        setPlayerScore((parseInt(playerScore) - 1).toString());
      }
      setResult(resultRef.current);
    }, 4000);

    return () => clearInterval(showTimeout, resultTimeout);
  }, []);

  return (
    <div className="h-screen flex flex-col justify-between items-center p-6 min-h-[590px] border-2 ">
      <Scoreboard />

      <div className="w-full border-2 grid border-yellow-400 grid-rows-2 grid-cols-2 md:grid-cols-3 md:grid-rows-1 max-w-[540px] md:max-w-">
        {/* <div className=" flex justify-between items-stretch w-full border-2"> */}
        <div className="flex flex-col border gap-6 justify-center items-center w-fit">
          <RPS type={playerChoice || "scissors"} />
          <p className="text-white text-center font-semibold tracking-wider">
            YOU PICKED
          </p>
        </div>

        <div className="flex flex-col gap-6 items-center justify-center border w-fit ml-auto md:col-start-3">
          {showCompChoice ? (
            <RPS type={compChoice} />
          ) : (
            <div
              className={`w-28 h-28 rounded-full md:w-40 md:h-40 bg-housePickBg ${
                showCompChoice || "animate-bounce"
              }`}
            ></div>
          )}
          <p className="text-white text-center font-semibold tracking-wider">
            THE HOUSE PICKED
          </p>
        </div>

        <div className="border-2 border-red-500 col-span-2 flex flex-col items-center justify-center md:col-start-2 md:col-auto md:row-start-1 md:w-full">
          <p className="text-white text-5xl text-center font-bold mb-4 tracking-wider">
            {result}
          </p>
          <PlayAgain />
        </div>
      </div>

      <Rules />
    </div>
  );
};

export default Page2;
