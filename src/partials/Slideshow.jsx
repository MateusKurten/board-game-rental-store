import { Carousel } from "flowbite-react";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../AppContext";
import axios from "axios";

export default function Slideshow() {

  const { slides, setSlides, slideAction } = useContext(AppContext)

  useEffect(() => {
    async function fetchData() {
      axios.get("http://localhost:3333/slides")
        .then(res => {
          setSlides(res.data.sort((a,b) => a.order - b.order));
        })
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