import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";


const Footer: React.FC = () => {
  return (
    <div className="footerDiv">
      <div className="footerLinksFlex">
        <Link className="nousContacterFooter"to="/contact">Nous contacter</Link>
        <a href="https://www.facebook.com/geneseinfo.fr/"
        >
          <FontAwesomeIcon icon={faFacebook} className="facebook-icon facebookICfooter" />
        </a>
      </div>
      <div className="mentionsLEtPhone">
        <Link to="/contact" className="mentionsL">Mentions légales</Link>
        <div><FontAwesomeIcon icon={faPhone} /> 03 82 44 02 11</div>
      </div>
    </div>
  );
};

export default Footer;
