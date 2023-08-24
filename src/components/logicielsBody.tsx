import React from "react";
import Office from "../assets/office.jpg";
import Microsoft from "../assets/microsoft.png";
import Azure from "../assets/azure.jpg";
import Sophos from "../assets/sophos.jpg";
import Panda from "../assets/panda.png";

const LogicielBody: React.FC = () => {
  return (
    <div className="reactDivMaterial2">
        <h2 className="téléphonieH2">Nos solutions d'intégrations de logiciels</h2>
        <div className="MatérieldivTxt">
            <p className="pWithMicrosoftLogo">Solution de gestion (Partenaire Sage, Partenaire EBP) et intégrations des produits <div className="microsoftDiv"><img className="microsoftLogo"src={Microsoft} alt="" /><p className="microsoftTxt">Microsoft</p></div> dans les solutions de gestion. </p>
            <p className="pWithOfficeLogo">Partenaire microsoft vente et Intégration systèmes d'exploitations, développement sur toutes la gamme <div className="officeDiv"><img className="office"src={Office} alt="" /><p className="officeTxt">Office</p></div>)</p>
            <div className="microsoftAndAzureDiv"><p className="pWithMicrosoftLogo">Solutions Cloud : Intégration et ventes des produits cloud</p>
                <div className="microsoftDiv2">
                    <img className="microsoftLogo"src={Microsoft} alt="" />
                    <p className="microsoftTxt">Microsoft 365</p> 
                    <p>et</p> <span className="azureSpan">
                    <img className="Azure"src={Azure} alt="" />
                    <p className="azureTxt">Azure </p>
                    </span>
                </div>
            </div>
            <br />
            <div>
                <p>
                Solution Bureau collaboratif CLOUD hébergé dans nos locaux ou externalisé
                </p>
            </div>
            <br />
            <br />
            <div className="sophosPandaDiv">Antivirus et protection Partenaire 
                    <div className="sophosDiv">
                        <img className="sophosImg"src={Sophos} alt="" />
                        <p className="sophosTxt">Sophos</p>
                    </div> &
                    <div className="pandaDiv">         
                        <img className="pandaImg"src={Panda} alt="" />
                        <p className="pandaTxt">Panda sécurité</p>
                    </div>          
            </div>
        </div>
        
    </div>
  );
};

export default LogicielBody;
