import React from "react";
import { Card, Badge } from "flowbite-react";
import { getDifficultyColor } from "../utils/difficulty-util";
import { LuUsers } from "react-icons/lu";
import { MdAccessTime } from "react-icons/md";

export default function Item({game, img, price, difficulty, maxplayers, minplayers, roundtime}) {

    return (
        <Card
          className="max-w-sm"
          renderImage={() => <img width={400} src={img} alt={game} />}
          theme={{
            "root": {
              "children": "flex h-full flex-col justify-center gap-2 p-4",
            },
          }}
        >
        <div className="flex justify-between">
          <div className="flex flex-wrap flex-col">
            <Badge className="w-fit" color={getDifficultyColor(difficulty)}>{difficulty}</Badge>
            <h5 className="mt-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              {game}
            </h5>
          </div>
          <div className="flex flex-wrap flex-col">
            <span className="text-sm mr-2"><LuUsers className="inline" /> {maxplayers == minplayers ? maxplayers : `${minplayers} - ${maxplayers}`}</span>
            <span className="text-sm"><MdAccessTime className="inline" /> {roundtime} min</span>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-gray-900 dark:text-white">{`R$${price}/day`}</span>
        </div>
      </Card>
    )
}