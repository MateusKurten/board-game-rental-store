import { useForm } from "react-hook-form";
import axios from "axios";
import { useContext } from "react";
import { AppContext } from "../AppContext";
import { v4 } from 'uuid';

export default function GameForm() {

  const { register, handleSubmit, formState: { errors }, reset } = useForm({ mode: 'onChange' });
  const { setGameAction, user } = useContext(AppContext);

  async function submitData(data) {
     axios.post("http://127.0.0.1:3333/games/add", {...data, userId: user.id, id: v4()})
      .then(res => setGameAction(`created-${res.data.id}`))
      .then(() => alert("Game added to the catalog!"))
      .then(() => reset())
      .catch((error) => alert(error.response.data.message));
  }

  return (
    <>
      <h5 className="text-3xl">Add game to collection</h5>
      <form className="mt-5 grid grid-cols-4 px-4 gap-x-4" onSubmit={handleSubmit(submitData)}>
        <div className="mb-5 col-span-full md:col-span-3">
          <label htmlFor="game" className="mb-2 text-sm font-medium text-gray-900 dark:text-white">Game</label>
          <input
            type="text"
            id="game"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5"
            required
            {...register('game', {
              required: "You must inform game title.",
              validate: {
                minLength: (value) => value.length >= 3 || "Game title must have at least 3 characters",
                maxLength: (value) => value.length <= 50 || "Game title can not have more than 50 characters",
              },
            })}
          />
        </div>
        <div className="mb-5 col-span-full md:col-span-1">
          <label htmlFor="difficulty" className="mb-2 text-sm font-medium text-gray-900 dark:text-white">Difficulty</label>
          <select
            name="difficulty"
            required
            id="difficulty"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full p-2.5"
            {...register('difficulty', {
              required: "You must inform game difficulty."
            })}
          >
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
        </div>
        <div className="mb-5 col-span-full">
          <label htmlFor="img" className=" mb-2 text-sm font-medium text-gray-900 dark:text-white">Image URL</label>
          <input
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5"
            required
            {...register('img')}
          />
        </div>
        <div className="mb-5 col-span-full sm:col-span-2 md:col-span-1">
          <label htmlFor="roundtime" className="mb-2 text-sm font-medium text-gray-900 dark:text-white">Round Time (minutes)</label>
          <input
            type="number"
            id="roundtime"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full p-2.5"
            required
            {...register('roundtime', {
              required: "You must inform roundtime.",
              validate: {
                min: (value) => value >= 0 || "Round time must be a positive value"
              }
            })}
          />
        </div>
        <div className="mb-5 col-span-full sm:col-span-2 md:col-span-1">
          <label htmlFor="price" className="mb-2 text-sm font-medium text-gray-900 dark:text-white">Price (R$/day)</label>
          <input
            type="number"
            id="price"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full p-2.5"
            required
            {...register('price', {
              required: "You must inform pricing value",
            })}
          />
        </div>
        <div className="mb-5 col-span-2 md:col-span-1">
          <label htmlFor="minplayers" className=" mb-2 text-sm font-medium text-gray-900 dark:text-white">Min. Players</label>
          <input
            type="number"
            id="minplayers"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full p-2.5"
            required
            {...register('minplayers', {
              required: "You must inform minimum number of players.",
            })}
          />
        </div>
        <div className="mb-5 col-span-2 md:col-span-1">
          <label htmlFor="maxplayers" className=" mb-2 text-sm font-medium text-gray-900 dark:text-white">Max. Players</label>
          <input
            type="number"
            id="maxplayers"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full p-2.5"
            required
            {...register('maxplayers', {
              required: "You must inform maximum number of players.",
              // validate: {
              //   min: (value) => value >= getValues().minplayers || "Maximum number of players should be greater than or equal to minimum number of players"
              // }
            })}
          />
        </div>
        <div className="errorsContainer col-span-full">
          {errors.game?.message && (
            <div>{errors.game.message}</div>
          )}
          {errors.difficulty?.message && (
            <div>{errors.difficulty.message}</div>
          )}
          {errors.minplayers?.message &&(
            <div>{errors.minplayers.message}</div>
          )}
          {errors.maxplayers?.message && (
            <div>{errors.maxplayers.message}</div>
          )}
          {errors.roundtime?.message && (
            <div>{errors.roundtime.message}</div>
          )}
          {errors.price?.message && (
            <div>{errors.price.message}</div>
          )}
        </div>
        <div className="flex justify-end col-span-full">
          <button type="submit" className="max-w-fit text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
        </div>
      </form>
    </>
  )
}
