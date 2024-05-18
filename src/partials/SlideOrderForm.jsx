import { useForm } from "react-hook-form";
import { Button } from "flowbite-react";
import { useContext } from "react";
import { AppContext } from "../AppContext";
import axios from "axios";

export default function SlideOrderForm({slideId, slideOrder}) {

  const { register, handleSubmit } = useForm({ mode: 'onChange' });
  const { setSlideAction, user } = useContext(AppContext);

  function submitData(data) {
    const slideId = Object.keys(data)[0];
    const order = Object.values(data)[0];
    axios.put(`http://127.0.0.1:3333/slides/order/${slideId}`, {
      userId : user.id,
      order: order
    })
    .then(() => setSlideAction(`update-${slideId}-${order}`))
    .then(alert('Slide order was successfully updated'));
  }

  return (
    <form className='grid grid-cols-1 sm:grid-cols-2 gap-y-2 my-2' onSubmit={handleSubmit(submitData)}>
      <input 
        type="number"
        className='w-16'
        placeholder={slideOrder}
        {...register(slideId)} />
        <Button color="gray" size='xs' className="items-center text-decoration-none" type="submit">Change order</Button>
    </form>
  );
}