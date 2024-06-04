import React, { useEffect, useState } from "react";
import Scoreboard from "../components/Scoreboard";
import RPS from "../components/RPS";
import { usePlayer } from "../components/Context";
import Rules from "../components/Rules";
import { compareChoices, computerChoice } from "../computerchoice";
import PlayAgain from "../components/PlayAgain";

const Page2 = () => {
  const { playerChoice } = usePlayer();
  const [compChoice] = useState(computerChoice());
  const [showCompChoice, setShowCompChoice] = useState(false);
  const [result, setResult] = useState("");

  useEffect(() => {
    let showTimeout = setTimeout(() => {
      setShowCompChoice(true);
    }, 3000);

    let resultTimeout = setTimeout(() => {
       setResult(compareChoices(playerChoice, compChoice));
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

      <div>
        <p className="text-white text-3xl text-center font-bold">{result}</p>
        <PlayAgain />
      </div>

      <Rules />
    </div>
  );
};

export default Page2;
