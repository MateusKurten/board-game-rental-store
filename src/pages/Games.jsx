import Item from "../components/Item";
import { Button } from "flowbite-react";
import { useState } from "react";

export default function App() {

  const dados = [
    {
      'id': "1",
      'item': 'Dobble',
      'img': 'super-speed-racing.png',
      'difficulty': 'Easy',
      'minplayers': '2',
      'maxplayers': '8',
      'price': '40',
      'roundtime': '5 min'
    },
    {
      'id': "2",
      'item': 'Ticket to Ride',
      'img': 'super-speed-racing.png',
      'difficulty': 'Medium',
      'minplayers': '2',
      'maxplayers': '8',
      'price': '120',
      'roundtime': '1 h'
    },
    {
      'id': "3",
      'item': 'Magic: The Gathering',
      'img': 'super-speed-racing.png',
      'difficulty': 'Hard',
      'minplayers': '2',
      'maxplayers': '2',
      'price': '30',
      'roundtime': '25 min'
    },
  ]

  const [data, setData] = useState(dados);

  return (
    <>
      <div className="flex flex-wrap justify-center gap-4 p-4 sm:mx-24">
        {
          data.map(value =>
            <Item key={value.id} {...value}/>
          )
        }
      </div>
    </>
  )
}