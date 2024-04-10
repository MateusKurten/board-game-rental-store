import React from "react";
import Slideshow from "../partials/Slideshow";
import GameCounter from "../partials/GameCounter";

export default function Home() {
  return (
    <div >
      <Slideshow />
      <GameCounter total="32" available="20" />
    </div>
  )
}