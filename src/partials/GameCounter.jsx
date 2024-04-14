export default function GameCounter({total, available}) {
  return (
    <div className="flex flex-col justify-center py-16 px-8 mb-8">
      <p className="text-9xl lg:text-[12rem] text-center">{total}</p>
      <p className="text-3xl text-center">Games Avaliable</p>
    </div>
  );
}