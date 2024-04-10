import { Carousel } from "flowbite-react";
import { getImageURL } from "../utils/image-util";

export default function Slideshow() {
  return (
    <Carousel 
      className="h-80 md:h-[38rem]"
      theme={{
        "scrollContainer": {
          "base": "flex h-full snap-mandatory overflow-y-hidden overflow-x-scroll scroll-smooth"
        }
      }}>
      <img src={getImageURL("super-speed-racing.png")} alt="..." />
      <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg" alt="..." />
      <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="..." />
      <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="..." />
      <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="..." />
    </Carousel>
  );
}