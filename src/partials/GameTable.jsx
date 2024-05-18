import DataTable from 'react-data-table-component';
import { useEffect, useContext } from 'react';
import { AppContext } from '../AppContext';
import { v4 } from 'uuid';
import axios from "axios";

export default function GameTable() {

  const {games, setGames, gameAction, setGameAction, user} = useContext(AppContext);

  const handleDelete = (state) => {
    axios.delete(`http://127.0.0.1:3333/games/delete/${state.id}`, { data: {userId: user.id } })
      .then(alert("Game deleted successfully"))
      .then(setGameAction(`delete-${v4()}`));
  };

  useEffect(() => {
    async function fetchData() {
      axios.get("http://127.0.0.1:3333/games")
        .then(res => {
          setGames(res.data);
        })
    }
    fetchData();
  }, [gameAction]);

  const columns = [
    {
      name: 'Game',
      selector: row => row.game,
      sortable: true
    },
    {
      name: 'Price',
      selector: row => ` R$ ${row.price}/day`,
      sortable: true
    },
    {
      name: 'Difficulty',
      selector: row => row.difficulty,
      sortable: true
    },
    {
      name: 'Min. Players',
      selector: row => row.minplayers,
      sortable: true
    },
    {
      name: 'Max. Players',
      selector: row => row.maxplayers,
      sortable: true
    },
    {
      name: 'Round Time',
      selector: row => `${row.roundtime} minutes`,
      sortable: true
    },
    {
      name: 'Actions',
      cell: (props) => (
        <a
          className='hover:cursor-pointer'
          onClick={() => {
            handleDelete(props);
          }}
        >
          <span className='text-red-600'>Delete</span>
        </a>
      )
    },
  ];

  return (
    <>
      <h5 className="text-3xl mb-4">Manage games</h5>
      <DataTable
        columns={columns}
        data={games}
        striped
      />
    </>
  );
}