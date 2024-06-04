import React, { createContext, useContext, useState } from "react";
const player = createContext();

const Context = ({ children }) => {
  const [playerChoice, setPlayerChoice] = useState("scissors");
  const [score, setScore] = useState("")
 
  return (
    <player.Provider value={{ playerChoice, setPlayerChoice, score, setScore, }}>
      {children}
    </player.Provider>
  );
};

export default Context;
export const usePlayer = () => useContext(player);
