import React, { createContext, useContext, useState } from "react";
const player = createContext();

const Context = ({ children }) => {
  const [playerChoice, setPlayerChoice] = useState("scissors");
  const [playerScore, setPlayerScore] = useState(0)
 
  return (
    <player.Provider value={{ playerChoice, setPlayerChoice, playerScore, setPlayerScore, }}>
      {children}
    </player.Provider>
  );
};

export default Context;
export const usePlayer = () => useContext(player);
