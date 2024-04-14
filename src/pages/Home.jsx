import React, { useContext } from "react";
import Slideshow from "../partials/Slideshow";
import GameCounter from "../partials/GameCounter";
import { AppContext } from "../AppContext";

export default function Home() {
  return (
    <div >
      <Slideshow />
      <GameCounter />
    </div>
  )
}