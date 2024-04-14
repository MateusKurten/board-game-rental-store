import { AppContext } from "../AppContext";
import { useContext } from "react";

export default function GameCounter() {
  const { games } = useContext(AppContext);

  return (
    <div className="flex flex-col justify-center py-16 px-8 mb-8">
      <p className="text-9xl lg:text-[12rem] text-center">{games.length}</p>
      <p className="text-3xl text-center">Games Avaliable</p>
    </div>
  );
}