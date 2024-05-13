import { AppContext } from "../AppContext";
import { useContext, useEffect } from "react";
import axios from "axios";

export default function GameCounter() {
  const { games, setGames, gameAction } = useContext(AppContext);

  useEffect(() => {
    async function fetchData() {
      // axios.get("https://firebaseapp-iom2ksf4eq-uc.a.run.app/games")
      axios.get("http://localhost:5001/board-game-rental-store/us-central1/firebaseApp/games")
        .then(res => {
          setGames(res.data);
        })
    }
    fetchData();
    console.log(games);
  }, [gameAction]);

  return (
    <div className="flex flex-col justify-center py-16 px-8 mb-8">
      <p className="text-9xl lg:text-[12rem] text-center">{games.length}</p>
      <p className="text-3xl text-center">Games Avaliable</p>
    </div>
  );
}