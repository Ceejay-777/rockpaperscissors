import React from "react";
import rules from "../assets/images/image-rules.svg";
import { usePlayer } from "./Context";

const RulesModal = () => {
  const { setRulesOpen } = usePlayer();
  return (
    <div
      className="border-2 bg-white px-12 py-24 h-screen w-screen"
      onClick={() => setRulesOpen(false)}
    >
      <p className="text-center text-2xl font-bold mb-24 text-slate-500 tracking-wider">
        RULES
      </p>
      <img src={rules} className="mx-auto" />
    </div>
  );
};

export default RulesModal;
