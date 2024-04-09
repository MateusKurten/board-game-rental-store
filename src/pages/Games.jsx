import Item from "../components/Item";
import { useState, useEffect } from "react";
import { listGames } from "../infra/games";

export default function App() {

  const [games, setGames] = useState([]);

  useEffect(() => {
    async function fetchData() {
      let data = await listGames();
      setGames(data);
    }
    fetchData();
  }, []);

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