import React from "react";
import { Link } from "react-router-dom";
import geneseLogo from "../assets/LOGO GENESE 1.svg";

const Navbar: React.FC = () => {
  return (
    <div className="navbar">
      <div className="geneseLogo">
        <Link className="geneseLogoLink" to="/home">
          <img className="logo"src={geneseLogo} alt="" />
        </Link>
      </div>
      <div className="menu">
        <div>
          <Link className="accueil menuElements"to="/home">Accueil</Link>
        </div>
        <div className="menu-item">
          <div className="dropdown">
            <span className="nosProduis  menuElements">Nos Produits</span>
            <div className="dropdown-content">
              <Link className="materiels dropDownItem" to="/matériel">
                Matériels
              </Link>
              <Link className="logiciels dropDownItem" to="/logiciels">
                Logiciels
              </Link>
            </div>
          </div>
        </div>
        <div className="menu-item-services">
          <div className="dropdown-services">
            <span className="services  menuElements">Services</span>
            <div className="dropdown-content-services">
              <Link className="telephonie dropDownItem link-no-underline" to="/téléphonie">
                Téléphonie
              </Link>
            </div>
          </div>
        </div>
        <div className="menu-item">
          <Link className="contact  menuElements" to="/contact">
            Contact
          </Link>
        </div>
        <div>
          <Link className="apropos menuElements" to="/à-propos">
          À propos de Genese Informatique 
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
