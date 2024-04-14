import { useForm } from "react-hook-form";
import { addSlide } from "../infra/slideshow";
import { storage } from "../infra/firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"
import { useContext } from "react";
import { AppContext } from "../AppContext";
import { v4 } from "uuid";

export default function SlideshowForm() {

  const { register, handleSubmit, formState: { errors }, reset } = useForm({ mode: 'onChange' });
  const { setSlideAction } = useContext(AppContext);

  async function submitData(data) {
    const imageRef = ref(storage, `images/${data.img[0].name}` + v4()); //tratar com uuid
    uploadBytes(imageRef, data.img[0])
      .then((snapshot) => {
        getDownloadURL(snapshot.ref)
          .then((url) => {
            data.img = url;
          })
          .then(() => addSlide(data))
          .then((id) => setSlideAction(`created-${id}`))
          .then(() => alert("Slide created!"))
          .then(() => reset());
      });
  }

  return (
    <>
      <h5 className="text-3xl">Add slide to slideshow</h5>
      <form className="mt-5 grid grid-cols-4 px-4 gap-x-4" onSubmit={handleSubmit(submitData)}>
        <div className="mb-5 col-span-full md:col-span-3">
          <label htmlFor="img" className="mb-2 text-sm font-medium text-gray-900 dark:text-white">Image</label>
          <input
            type="file"
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
