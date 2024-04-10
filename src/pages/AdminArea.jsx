import React from "react";
import GameForm from "../partials/GameForm";
import { Accordion } from "flowbite-react"

export default function AdminArea() {
  return (
    <>
      <Accordion collapseAll className="lg:mx-64 my-4 bg-white">
        <Accordion.Panel>
          <Accordion.Title>Games</Accordion.Title>
          <Accordion.Content>
            <GameForm />
            <hr className="my-4"></hr>
            GameTable
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>Carousel</Accordion.Title>
          <Accordion.Content>
            Carousel
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>
      AdminArea
    </>
  )
}