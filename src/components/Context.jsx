import React, { createContext, useContext, useState } from "react";
const player = createContext();

const Context = ({ children }) => {
  const [playerChoice, setPlayerChoice] = useState();
  const [score, setScore] = useState("")
  const [playerhasChosen, setPlayerHasChosen] = useState(false)
  return (
    <player.Provider value={{ playerChoice, setPlayerChoice, score, setScore, playerhasChosen, setPlayerHasChosen }}>
      {children}
    </player.Provider>
  );
};

export default Context;
export const usePlayer = () => useContext(player);
