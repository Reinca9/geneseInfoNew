import React, { useRef, useState, useEffect } from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import PC from "../assets/PC.png";
import Tablette from "../assets/tabSM.png";
import Server from "../assets/Serveurs.png";

const CarouselComponent: React.FC = () => {
  const totalSlides = 3; // Update the total number of slides
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef<Carousel>(null);

  useEffect(() => {
    if (currentSlide === totalSlides - 1) {
      const timeout = setTimeout(() => {
        setCurrentSlide(0);
      }, 5000);

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [currentSlide, totalSlides]);

  const handleChange = (index: number) => {
    setCurrentSlide(index);
  };

  const thumbnails = [PC, Tablette, Server]; // Define your thumbnail images

  const handleThumbnailClick = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="carouselDiv ">
      <Carousel
        showThumbs={false}
        autoPlay={true}
        interval={2500}
        infiniteLoop={true}
        selectedItem={currentSlide}
        onChange={handleChange}
        ref={carouselRef}
      >
        {thumbnails.map((thumbnail, index) => (
          <div key={index}>
            <img
              className="carouselPizza"
              src={thumbnail}
              alt={`Slide ${index + 1}`}
            />
          </div>
        ))}
      </Carousel>

      {/* Thumbnail Navigation */}
      <div className="thumbnailSection">
        {thumbnails.map((thumbnail, index) => (
          <img
            key={index}
            src={thumbnail}
            alt={`Thumbnail ${index + 1}`}
            className={`thumbnail ${currentSlide === index ? "activeThumbnail" : ""}`}
            onClick={() => handleThumbnailClick(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default CarouselComponent;