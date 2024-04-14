import { Carousel } from "flowbite-react";
import { useContext, useEffect, useState } from "react";
import { listSlides } from "../infra/slideshow";
import { AppContext } from "../AppContext";

export default function Slideshow() {

  const { slides, setSlides, slideAction } = useContext(AppContext)

  useEffect(() => {
    async function fetchData() {
      let data = await listSlides();
      setSlides(data);
    }
    fetchData();
  }, [slideAction]);

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