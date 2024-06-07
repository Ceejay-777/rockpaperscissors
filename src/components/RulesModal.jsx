import React from "react";
import rules from "../assets/images/image-rules.svg";
import { usePlayer } from "./Context";

const RulesModal = () => {
  const { setRulesOpen } = usePlayer();
  return (
    <div className="absolute h-screen w-screen bg-black/5 flex justify-center items-center z-20" onClick={() => setRulesOpen(false)}>
      <div className="bg-white flex flex-col justify-evenly items-center h-screen w-screen md:w-[420px] md:h-[420px] md:rounded-xl">
        <p className="text-center text-2xl font-bold text-slate-500 tracking-wider md:mr-auto md:ml-8">
          RULES
        </p>
        <img src={rules} className="mx-auto" />
      </div>
    </div>
  );
};

export default RulesModal;
