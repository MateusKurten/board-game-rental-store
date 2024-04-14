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
  const [user, setUser] = useState({id:"", email:"", password:""});

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <div className="flex-1">
          <AppContext.Provider value={
            {
              games, setGames,
              slides, setSlides,
              gameAction, setGameAction,
              slideAction, setSlideAction,
              user, setUser
            }
          }>
            <Header />
            <Outlet />
          </AppContext.Provider>
        </div>
        <CustomFooter />
      </div>
    </>
  )
};
