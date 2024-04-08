import React from "react";
import GameForm from "../partials/GameForm";
import { Accordion } from "flowbite-react"

export default function AdminArea() {
  return (
    <>
      <Accordion collapseAll className="lg:mx-64 my-4 bg-white">
        <Accordion.Panel>
          <Accordion.Title>Add game to catalog</Accordion.Title>
          <Accordion.Content>
            <GameForm />
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>Add item to carousel</Accordion.Title>
          <Accordion.Content>
            CarousemItemForm
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>
      AdminArea
    </>
  )
}