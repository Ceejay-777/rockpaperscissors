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
    <div>
      <Scoreboard />

      <div className=" flex justify-between items-stretch">
        <div className=" flex flex-col gap-6">
          <RPS type={playerChoice || "scissors"} />
          <p className="text-white text-center font-semibold">YOU PICKED</p>
        </div>

        <div className="flex flex-col gap-6 items-center justify-end">
          {showCompChoice ? (
            <RPS type={compChoice} />
          ) : (
            <div
              className={`w-28 h-28 rounded-full md:w-40 md:h-40 bg-housePickBg ${
                showCompChoice || "animate-bounce"
              }`}
            ></div>
          )}
          <p className="text-white text-center font-semibold ">
            THE HOUSE PICKED
          </p>
        </div>
      </div>

      <div className="mt-12">
        <p className="text-white text-5xl text-center font-bold mb-4">
          {result}
        </p>
        <PlayAgain />
      </div>

      <Rules />
    </div>
  );
};

export default Page2;
