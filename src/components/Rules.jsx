import React from "react";
import { usePlayer } from "./Context";

const Rules = () => {
  const { setRulesOpen } = usePlayer();
  return (
    <div className="border-2 border-slate-300 font-semibold rounded-xl py-2 px-12 w-fit text-white tracking-widest hover:scale-105 mx-auto  md:ml-auto md:mr-0" onClick={() => setRulesOpen(true)}>
      RULES
    </div>
  );
};

export default Rules;
