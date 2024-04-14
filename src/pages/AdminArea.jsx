import React from "react";
import GameForm from "../partials/GameForm";
import { Accordion } from "flowbite-react"
import SlideshowForm from "../partials/SlideshowForm";
import GameTable from "../partials/GameTable";
import SlideshowTable from "../partials/SlideshowTable";
import { AppContext } from "../AppContext";
import { useContext } from "react";

export default function AdminArea() {

  const { user } = useContext(AppContext)

  return (
    <>
      { user.id &&
      <Accordion collapseAll className="mx-4 lg:mx-12 my-4 bg-white">
        <Accordion.Panel>
          <Accordion.Title className="focus:bg-gray-200">Games</Accordion.Title>
          <Accordion.Content>
            <GameForm />
            <hr className="my-4"></hr>
            <GameTable />
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>Carousel</Accordion.Title>
          <Accordion.Content>
            <SlideshowForm />
            <hr className="my-4"></hr>
            <SlideshowTable />
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>
      }
    </>
  )
}