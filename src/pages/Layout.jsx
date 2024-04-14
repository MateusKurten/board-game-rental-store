import { Outlet } from "react-router-dom";
import Header from "../partials/Header";
import CustomFooter from "../partials/CustomFooter";
import { AppContext } from "../AppContext";
import { useState } from "react"

export default function Layout() {

  const [games, setGames] = useState([]);
  const [slides, setSlides] = useState([]);
  const [gameAction, setGameAction] = useState();
  const [slideAction, setSlideAction] = useState();

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <div className="flex-1">
          <Header />
          <AppContext.Provider value={
            {
              games, setGames,
              slides, setSlides,
              gameAction, setGameAction,
              slideAction, setSlideAction
            }
          }>
            <Outlet />
          </AppContext.Provider>
        </div>
        <CustomFooter />
      </div>
    </>
  )
};
