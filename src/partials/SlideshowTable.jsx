import { listSlides, deleteSlide } from '../infra/slideshow';
import DataTable from 'react-data-table-component';
import { useState, useEffect } from 'react';
import { Button } from 'flowbite-react'
import SlideOrderForm from './SlideOrderForm'
import { useForm } from 'react-hook-form';

export default function SlideshowTable() {

  const [slides, setSlides] = useState([]);  // PASSAR VIA CONTEXTO
  const [slideAction, setSlideAction] = useState(); // PASSAR VIA CONTEXTO
  const [selectedSlides, setSelectedSlides] = useState([]);

  function handleRowSelect(selected) {
    setSelectedSlides(selected.selectedRows);
  }

  function handleDelete() {
    selectedSlides.forEach(slide => deleteSlide(slide.id).then(setSelectedSlides([])));
    setSlideAction(`delete-${selectedSlides[0].id}`);
  }

  function submitData(data){
    console.log(data);
  }

  useEffect(() => {
    async function fetchData() {
      let data = await listSlides();
      setSlides(data);
    }
    fetchData();
  }, [slideAction]); //PASSAR VIA CONTEXTO

  const columns = [
    {
      name: 'Slide',
      selector: row => <img width={200} src={row.img} />,
    },
    {
      name: 'Order',
      selector: row => <SlideOrderForm slideId={row.id} slideOrder={row.order}/>,
      sortable: true
    }
  ];

  return (
    <>
      <h5 className="text-3xl mb-4">Manage slides</h5>
      {
        selectedSlides.length > 0 ? 
        <Button color="failure" onClick={handleDelete}>Delete</Button> :
        <Button color="failure" disabled>Delete</Button> 
      }
      <DataTable
        columns={columns}
        data={slides}
        selectableRows
        onSelectedRowsChange={handleRowSelect}
        striped
      />
    </>
  );
}