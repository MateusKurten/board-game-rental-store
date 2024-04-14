import { useForm } from "react-hook-form";
import { Button } from "flowbite-react";
import { updateOrder } from "../infra/slideshow";
import { useContext } from "react";
import { AppContext } from "../AppContext";

export default function SlideOrderForm({slideId, slideOrder}) {

  const { register, handleSubmit } = useForm({ mode: 'onChange' });
  const { setSlideAction } = useContext(AppContext);

  function submitData(data) {
    updateOrder(data)
    .then((id) => setSlideAction(`update-${id}`))
    .then(alert('Slide order was successfully updated'));
  }

  return (
    <form className='grid grid-cols-1 sm:grid-cols-2 gap-y-2' onSubmit={handleSubmit(submitData)}>
      <input 
        type="number" 
        id='order' 
        className='w-16'
        placeholder={slideOrder}
        {...register(slideId)} />
        <Button size='xs' className="items-center" type="submit">Change order</Button>
    </form>
  );
}