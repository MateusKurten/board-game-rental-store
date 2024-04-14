import { Carousel } from "flowbite-react";
import { getImageURL } from "../utils/image-util";
import { useEffect, useState } from "react";
import { listSlides } from "../infra/slideshow";

export default function Slideshow() {
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    async function fetchData() {
      let data = await listSlides();
      setSlides(data);
    }
    fetchData();
  }, []);

  return (
    <Carousel 
      className="h-80 md:h-[38rem]"
      theme={{
        "scrollContainer": {
          "base": "flex h-full snap-mandatory overflow-y-hidden overflow-x-scroll scroll-smooth"
        }
      }}>
        {
          slides.map(slide =>
              <img src={slide.img} key={slide.id}/>
          )
        }
    </Carousel>
  );
}