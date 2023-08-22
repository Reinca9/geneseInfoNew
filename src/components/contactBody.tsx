import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import GoogleMapApi from "./googleMapApi";

const ContactBody: React.FC = () => {
  return (
    <div >
       <hr  className="hrHomeBody"/>
       <div className="contactMainDiv">
          <div className="textContactDiv">
            <h1>Nous contacter</h1>
            <p>9B route de Longwy </p>
            <p>54870 Villers la Chèvres</p>
            <div className="iconAndTextdiv"> <FontAwesomeIcon icon={faPhone} className="phone-icon contacticon" /><p>03 82 44 02 11</p></div>
            <div className="iconAndTextdiv">  <FontAwesomeIcon icon={faEnvelope} className="envelope-icon contacticon" /> <p>contact@geneseinfo.fr</p></div>
            <div > <FontAwesomeIcon icon={faFacebook} className="facebook-icon facebookIC" /></div>

          </div>
        <div>

        </div>
        <GoogleMapApi/>
      </div>
          
       
    </div>
  );
};

export default ContactBody;
