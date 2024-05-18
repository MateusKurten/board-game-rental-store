import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AppContext } from "../AppContext";
import { v4 } from "uuid";
import axios from "axios";


export default function SlideshowForm() {

  const { register, handleSubmit, formState: { errors }, reset } = useForm({ mode: 'onChange' });
  const { setSlideAction, slideAction, user } = useContext(AppContext);

  async function submitData(data) {
    axios.post("http://127.0.0.1:3333/slides/add", {...data, userId: user.id, id: v4()})
      .then(res => setSlideAction(`created-${res.data.id}`))
      .then(alert("Slide created!"))
      .then(reset())
      .then(console.log(slideAction))
      .catch((error) => alert(error.response.data.message));
  }

  return (
    <>
      <h5 className="text-3xl">Add slide to slideshow</h5>
      <form className="mt-5 grid grid-cols-4 px-4 gap-x-4" onSubmit={handleSubmit(submitData)}>
        <div className="mb-5 col-span-full md:col-span-3">
          <label htmlFor="img" className="mb-2 text-sm font-medium text-gray-900 dark:text-white">Image URL</label>
          <input
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5"
            required
            {...register('img')}
          />
        </div>
        <div className="mb-5 col-span-full md:col-span-1">
          <label htmlFor="order" className="mb-2 text-sm font-medium text-gray-900 dark:text-white">Order</label>
          <input
            type="number"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full p-2.5"
            required
            {...register('order', {
              required: "You must inform slide order.",
              validate: {
                min: (value) => value >= 0 || "Order must be a positive value"
              }
            })}
          />
        </div>
        <div className="errorsContainer col-span-full">
          {errors.img?.message && (
            <div>{errors.img.message}</div>
          )}
          {errors.order?.message && (
            <div>{errors.order.message}</div>
          )}
        </div>
        <div className="flex justify-end col-span-full">
          <button type="submit" className="max-w-fit text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
        </div>
      </form>
    </>
  )
}
