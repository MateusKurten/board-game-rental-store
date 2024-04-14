import { AppContext } from "../AppContext";
import { useContext, useEffect } from "react";
import { listGames } from "../infra/games";

export default function GameCounter() {
  const { games, setGames, gameAction } = useContext(AppContext);

  useEffect(() => {
    async function fetchData() {
      let data = await listGames();
      setGames(data);
    }
    fetchData();
  }, [gameAction]);

  return (
    <div className="flex flex-col justify-center py-16 px-8 mb-8">
      <p className="text-9xl lg:text-[12rem] text-center">{games.length}</p>
      <p className="text-3xl text-center">Games Avaliable</p>
    </div>
  );
}