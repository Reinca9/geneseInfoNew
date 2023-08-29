import React from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import 'tailwindcss/tailwind.css';
import { useRef, useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import PCcarousel from "../assets/PCcarousel.jpg";
import Mobiles from "../assets/Mobiles.webp";
import Server from "../assets/ServerCarousel.jpg";
import Office from "../assets/OfficeCarousel.jpg";

const CarouselHome: React.FC = () => {
  const totalSlides = 5; 
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef<Carousel>(null);

  useEffect(() => {
    if (currentSlide === totalSlides -1 ) {
      const timeout = setTimeout(() => {
       
        setCurrentSlide(0);
      }, 3000); // timer avant le reset une fois la dernière frame atteint

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [currentSlide, totalSlides]);

  const handleChange = (index: number) => {
    setCurrentSlide(index);
  };
  return (
    <div className="carouselHome " >
      <Carousel   showThumbs={false}
        autoPlay={true}
        interval={3000} // l'interval de switch de slide
        infiniteLoop={true}
        selectedItem={currentSlide}
        onChange={handleChange}
        ref={carouselRef}>
        <div className="carouselHomeFrame">
                <img className="carouselHomeImg"src={Mobiles} alt="" />
                <h1>Communication et Téléphonie</h1>
                <p>Abonnement lien internet (Fibre FTTH, Fibre dédier FTTO, 5G illimitées VDSL)
                    Couverture et éligibilité sur demande. 
                    Téléphonie fixe.
                </p>
                <Link to="/téléphonie">
                    <button className="productCardsButton">En savoir plus</button>
                </Link>
                </div>
        <div className="carouselHomeFrame">
                <img className="carouselHomeImg" src={PCcarousel} alt="" />
                <h1>Matériel informatique</h1>
                <p>PC, serveurs, NAS, Tablettes, Smartphone, Camera sur IP et accessoires.</p>
                <Link to="/matériel">
                    <button className="productCardsButton">En savoir plus</button>
                </Link>
        </div>
        <div className="carouselHomeFrame">          
                <img className="carouselHomeImg"src={Office} alt="" />
                <h1>Intégration de logiciels</h1>
                <p>Solutions de gestion.
                Partenaire microsoft et intégrations OS, développement sur toutes la gamme office.
                Solutions Cloud.
                </p>
                <Link to="/logiciels">
                    <button className="productCardsButton">En savoir plus</button>
                </Link>
        </div>
        <div className="carouselHomeFrame">
                <img className="carouselHomeImg"src={Server} alt="" />
                <h1>Hébergement sur nos servers ou externalisé</h1>
                <p>Solutions d'hébergement, serveurs disponibles en interne.
                </p>
                <Link to="/logiciels">
                    <button className="productCardsButton">En savoir plus</button>
                </Link>
        </div>
      </Carousel>
    </div>
  );
}

export default CarouselHome;