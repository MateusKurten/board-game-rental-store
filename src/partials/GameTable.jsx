import { listGames, deleteGame } from '../infra/games';
import DataTable from 'react-data-table-component';
import { useState, useEffect } from 'react';
import { Button } from 'flowbite-react'

export default function GameTable() {

  const [games, setGames] = useState([]); // PASSAR VIA CONTEXTO
  const [gameAction, setGameAction] = useState(); // PASSAR VIA CONTEXTO
  const [selectedGames, setSelectedGames] = useState([]);

  function handleRowSelect(selected) {
    setSelectedGames(selected.selectedRows);
  }

  function handleDelete() {
    selectedGames.forEach(game => deleteGame(game.id).then(setSelectedGames([])));
    setGameAction(`delete-${selectedGames[0].id}`);
  }

  useEffect(() => {
    async function fetchData() {
      let data = await listGames();
      setGames(data);
    }
    fetchData();
  }, [gameAction]); //PASSAR VIA CONTEXTO

  const columns = [
    {
      name: 'Game',
      selector: row => row.game,
      sortable: true
    },
    {
      name: 'Price',
      selector: row => ` R$ ${row.minplayers}/day`,
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
      selector: row => row.minplayers,
      sortable: true
    },
    {
      name: 'Round Time',
      selector: row => row.minplayers,
      sortable: true
    },
  ];

  return (
    <>
      <h5 className="text-3xl mb-4">Manage games</h5>
      {
        selectedGames.length > 0 ? 
        <Button color="failure" onClick={handleDelete}>Delete</Button> :
        <Button color="failure" disabled>Delete</Button> 
      }
      <DataTable
        columns={columns}
        data={games}
        selectableRows
        onSelectedRowsChange={handleRowSelect}
        striped
      />
    </>
  );
}