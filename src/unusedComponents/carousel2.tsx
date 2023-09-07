import React from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import 'tailwindcss/tailwind.css';
import { useRef, useState, useEffect } from 'react';
import Camera from "../assets/camera.png";
import Periph from "../assets/periph.png";
import Portable from "../assets/portableAsusRog.png";

const CarouselComponent: React.FC = () => {
  const totalSlides = 5; 
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef<Carousel>(null);

  useEffect(() => {
    if (currentSlide === totalSlides -1 ) {
      const timeout = setTimeout(() => {
       
        setCurrentSlide(0);
      }, 5000); // timer avant le reset une fois la dernière frame atteint

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [currentSlide, totalSlides]);

  const handleChange = (index: number) => {
    setCurrentSlide(index);
  };
  return (
    <div className="carouselDiv2 " >
      <Carousel   showThumbs={false}
        autoPlay={true}
        interval={2500} // l'interval de switch de slide
        infiniteLoop={true}
        selectedItem={currentSlide}
        onChange={handleChange}
        ref={carouselRef}>
        <div>
          <img className="carouselPizza" src={Camera} alt="veggiePizza" />
        </div>
        <div>
          <img className="carouselPizza" src={Periph} alt="veggiePizza" />
        </div>
        <div>
          <img className="carouselPizza" src={Portable} alt="veggiePizza" />
        </div>

      </Carousel>
    </div>
  );
}

export default CarouselComponent;