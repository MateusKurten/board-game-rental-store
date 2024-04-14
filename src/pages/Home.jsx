import React, { useContext } from "react";
import Slideshow from "../partials/Slideshow";
import GameCounter from "../partials/GameCounter";

export default function Home() {
  return (
    <div >
      <Slideshow />
      <GameCounter />
    </div>
  )
}