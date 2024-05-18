import DataTable from 'react-data-table-component';
import { useEffect, useContext } from 'react';
import SlideOrderForm from './SlideOrderForm'
import { AppContext } from '../AppContext';
import { v4 } from 'uuid';
import axios from "axios";


export default function SlideshowTable() {

  const { slides, setSlides, slideAction, setSlideAction, user } = useContext(AppContext);

  const handleDelete = (state) => {
    axios.delete(`http://127.0.0.1:3333/slides/delete/${state.id}`, { data: {userId: user.id } })
      .then(alert("Slide deleted successfully"))
      .then(setSlideAction(`delete-${v4()}`));
  };

  useEffect(() => {
    async function fetchData() {
      axios.get("http://localhost:3333/slides")
        .then(res => {
          setSlides(res.data.sort((a,b) => a.order - b.order));
        })
    }
    fetchData();
  }, [slideAction]);

  const columns = [
    {
      name: 'Slide',
      selector: row => <img width={200} src={row.img} />,
    },
    {
      name: 'Order',
      selector: row => <SlideOrderForm slideId={row.id} slideOrder={row.order}/>,
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
      <h5 className="text-3xl mb-4">Manage slides</h5>
      <DataTable
        columns={columns}
        data={slides}
        striped
      />
    </>
  );
}