import React from 'react'
import { useNavigate } from 'react-router';

const PlayAgain = () => {
  const navigate = useNavigate()
  return (
    <div className="rounded-xl font-semibold py-3 px-16 w-fit tracking-widest hover:scale-105 bg-white text-darkText mx-auto" onClick={() => navigate("/")}>
      PLAY AGAIN
    </div>
  );
}

export default PlayAgain
