import { listGames, deleteGame } from '../infra/games';
import DataTable from 'react-data-table-component';
import { useState, useEffect, useContext } from 'react';
import { Button } from 'flowbite-react'
import { AppContext } from '../AppContext';

export default function GameTable() {

  const [selectedGames, setSelectedGames] = useState([]);
  const {games, setGames, gameAction, setGameAction} = useContext(AppContext);

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