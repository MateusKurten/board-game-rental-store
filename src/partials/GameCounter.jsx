export default function GameCounter({total, available}) {
  return (
    <div className="flex flex-wrap w-full justify-around items-center mb-8">
      <div className="flex flex-col justify-center py-16 px-8">
        <p className="text-9xl lg:text-[12rem]">{total}</p>
        <p className="text-3xl text-center">Games</p>
      </div>

      <div className="flex flex-col justify-center p-8">
        <p className="text-9xl lg:text-[12rem]">{available}</p>
        <p className="text-3xl text-center">Available</p>
      </div>
    </div>
  );
}