import React from "react";
import BackgroundImg from "../assets/backgroundHome.png";
import AsusPcImg from "../assets/portableAsusRog.png";
import Forfait from "../assets/forfat.png";
import Win11 from "../assets/Win11_Pro_SoftwareShark_1920x1920.jpg";

const HomeBody: React.FC = () => {
  return (
    
    <div>
        <div className="homeBodyMain">
        <hr  className="hrHomeBody"/>
            <img className="backgroundImg"src={BackgroundImg} alt="" />
            <div className="productCardsDiv">
            <div className="productDiv1 productCards">
                <h1>Téléphonie</h1>
                <img src={Forfait} alt="" />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel voluptatibus fuga error deleniti itaque officiis totam voluptatum vero maiores qui.</p>
                <button className="productCardsButton">Reserver</button>
            </div>
            <div className="productDiv2 productCards">
                <h1>Matériel informatique</h1>
                <img src={AsusPcImg} alt="" />
                <p>PC de bureau, portables, périphériques et plus encore</p>
                <button className="productCardsButton">Reserver</button>
            </div>
            <div className="productDiv3 productCards">
                <h1>Logiciels</h1>
                <img src={Win11} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente quibusdam debitis incidunt cumque molestiae voluptatem ullam vitae ea placeat ratione.</p>
                <button className="productCardsButton">Reserver</button>
            </div>
            </div>      
        </div>
    </div>
  );
};

export default HomeBody;
