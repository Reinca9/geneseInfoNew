import React from "react";
import { Link } from "react-router-dom";

const PhoneBody: React.FC = () => {
  return (
    <div className="phoneBodyMain">
      <h2 className="téléphonieH2">La téléphonie revisitée avec Genese Informatique</h2>
      <video controls>
        <source src={process.env.PUBLIC_URL + "/videoAssets/Video_Gestion-des-appels.mp4"} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

    </div>
  );
};

export default PhoneBody;
