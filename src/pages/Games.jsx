import Item from "../components/Item";
import { useEffect } from "react";
import axios from "axios";
import { AppContext } from "../AppContext";
import { useContext } from "react";

export default function App() {

  const {games, setGames, gameAction} = useContext(AppContext);

  useEffect(() => {
    async function fetchData() {
      axios.get("http://localhost:3333/games")
        .then(res => {
          setGames(res.data);
        })
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