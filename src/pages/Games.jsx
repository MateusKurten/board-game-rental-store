import Item from "../components/Item";
import { useState, useEffect } from "react";
import { listGames } from "../infra/games";
import { AppContext } from "../AppContext";
import { useContext } from "react";

export default function App() {

  const {games, setGames, gameAction} = useContext(AppContext);

  useEffect(() => {
    async function fetchData() {
      let data = await listGames();
      setGames(data);
    }
    fetchData();
  }, [gameAction]);

  return (
    <>
      <div className="flex flex-wrap justify-center gap-4 p-4 sm:mx-24">
        {
          games.map(value =>
            <Item key={value.id} {...value}/>
          )
        }
      </div>
    </>
  )
}