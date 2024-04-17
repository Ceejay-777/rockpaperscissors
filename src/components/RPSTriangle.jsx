import React from "react";
import triangle from "../assets/images/bg-triangle.svg";
import RPS from "./RPS";

const RPSTriangle = () => {
  return (
    <div className="w-fit h-fit mx-auto">
        <div className=" w-fit h-fit relative ">
          <div className="w-60 md:w-80">
            <img src={triangle} alt="" className="w-full h-full"/>
          </div>
          <RPS type={"paper"} addStyles="absolute top-[-64px] left-[-32px]" />
          <RPS type={"scissors"} addStyles="absolute top-[-64px] right-[-32px]" />
          <div className="w-full absolute bottom-[-32px] mx-auto flex items-center justify-center">
            <RPS type={"rock"}/>
          </div>
        </div>
    </div>
  );
};

export default RPSTriangle;
