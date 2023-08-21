import React from "react";
import iframe from "react-iframe";

const GoogleMapApi: React.FC = () => {
  return (
    <div className="googleMapMainContainer">
      <div className="googleMapMain">
      <iframe
          width="600"
          height="450"
          style={{ border: "0" }} // Correct usage of style attribute
          loading="lazy"
          allowFullScreen
          src="https://www.google.com/maps/embed/v1/place?q=9B%20route%20de%20longwy%2054870%20Villers%20la%20Ch%C3%A8vres&key=AIzaSyC1756aHIGOMCZ7n_vRU-btfKwuH7S_Eto"
        ></iframe>
      </div>
    </div>
  );
}

export default GoogleMapApi;