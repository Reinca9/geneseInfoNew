import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import GoogleMapApi from "./googleMapApi";

const AboutUs: React.FC = () => {
  return (
    <div className="aboutMainDiv">
        <p className="aboutP">
            Implantée au cœur du pays-haut, Genèse informatique est une entreprise locale présente dans divers
            secteurs comme la Téléphonie, la mise en place de logiciels et autres solutions de gestions et enfin
            dans l'assistance informatique pour les particuliers et les professionnels.
        </p>
    </div>
  );
};

export default AboutUs;
