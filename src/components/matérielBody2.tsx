import React from "react";
import PC from "../assets/PC.png";
import Serveurs from "../assets/Serveurs.png";
import tabSM from "../assets/tabSM.png";
import Camera from "../assets/camera.png";
import Periph from "../assets/periph.png";
import Carousel1 from "./carousel";

import pcIcon from "../assets/pcIcon.png";

const MaterialBody2: React.FC = () => {
  return (
    <div className="reactDivMaterial2">
        <div className="notreMatEtIcon">
            <h2 className="téléphonieH2">Notre expertise matérielle à votre disposition</h2> 
            <img className="pcIcon"src={pcIcon} alt="" />
        </div>
        <div className="MatérieldivTxt">
            <p>Ventes Toutes Marques, Réparation et Maintenance, Intégration dans infrastructures 
                existantes, assemblage de postes à la demandes</p>
            <p>Materiel Réseau , Vente, Installation routeur, Pare Feu , switch manager, solution Wifi
                 (Point d’accès, Réseau Mesh, Pont Wifi inter bâtiments) <br /> <br />Système VPN connexion succursale</p>
            <p>Sécurisations des équipements et supervisions (Télémaintenance)</p>
        </div>
        <div>
            <div className="materielAndCarouselDiv">
                    <div className="Matérieldiv">
                        <img className="pcIMG"src={PC} alt="" />
                        <p>  PC de bureau, portables ou gamer</p>
                    </div>
                    <div className="Matérieldiv">
                    
                        <img className="serverImg"src={Serveurs} alt="" />
                        <p>  Serveurs</p> 
                    </div> 
                    <div className="Matérieldiv">
                        
                        <img className="tabSPImg"src={tabSM} alt="" />
                        <p>  Tablettes et smartphones</p> 
                    </div> 
                    <div className="Matérieldiv">
                    
                        <img className="cameraIMG"src={Camera} alt="" />
                        <p>  Camera sur IP</p> 
                    </div>    
                    <div className="Matérieldiv">
                    
                        <img className="accEtPeriph"src={Periph} alt="" />
                        <p>  Accessoires et Péripheriques</p> 
                    </div>    
                    
                    <div className="BothCarouselDiv">
                        <Carousel1/>

                    </div>
                </div>
        </div>
    </div>
  );
};

export default MaterialBody2;
