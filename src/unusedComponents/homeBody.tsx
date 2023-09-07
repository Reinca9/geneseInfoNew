import React from "react";
import AsusPcImg from "../assets/greenPC.jpg";
import Forfait from "../assets/forfat.png";
import Win11 from "../assets/Win11_Pro_SoftwareShark_1920x1920.jpg";
import { Link } from "react-router-dom";

const HomeBody: React.FC = () => {
  return (
    
    <div>
        <div className="homeBodyMain">
        <hr  className="hrHomeBody"/>
            <div className="productCardsDiv">
            <div className="productDiv1 productCards">
                <h1>Communication et Téléphonie</h1>
                <img className="productCardsImg"src={Forfait} alt="" />
                <p>Abonnement lien internet (Fibre FTTH, Fibre dédier FTTO, 5G illimitées VDSL)
                    <br /><br />
                    Couverture et éligibilité sur demande. 
                    <br /><br />
                    Téléphonie fixe.
                </p>
                <Link to="/téléphonie">
                    <button className="productCardsButton">En savoir plus</button>
                </Link>
            </div>
            <div className="productDiv2 productCards">
                <h1>Matériel informatique</h1>
                <img src={AsusPcImg} alt="" />
                <p>PC, serveurs, NAS, Tablettes, Smartphone,<br /><br /> Camera sur IP et accessoires.</p>
                <Link to="/matériel">
                    <button className="productCardsButton productCardsButton2">En savoir plus</button>
                </Link>
            </div>
            <div className="productDiv3 productCards">
                <h1>Intégration de logiciels</h1>
                <img src={Win11} alt="" />
                <p>Solutions de gestion.
                    <br />
                    <br />
                Partenaire microsoft et intégrations OS, développement sur toutes la gamme office.
                <br />
                <br />
                Solutions Cloud.
                </p>
                <Link to="/logiciels">
                    <button className="productCardsButton">En savoir plus</button>
                </Link>
            </div>
            </div>      
        </div>
    </div>
  );
};

export default HomeBody;
