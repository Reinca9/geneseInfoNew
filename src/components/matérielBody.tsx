import React from "react";
import { Link } from "react-router-dom";
import { materielList } from "../data/materielData";

const MaterialBody: React.FC = () => {
  return (
    <div className="reactDivMaterial">
      <div className="materialBodyMain">
        <div className="materialCardDiv">
          {materielList.map((materiel, index) => (
            <div key={index} className="materialCard">
              <Link
                to={`/details/${encodeURIComponent(materiel.name)}`}
                className="link-no-underline" // Add the class here
              >
                <div>
                  <img src={materiel.imageUrl} alt={materiel.name} />
                </div>
                <div className="materialCardTextP">
                  <p>{materiel.description}</p>
                </div>
                <div className="materialCardPrice">
                  <p
                    className={
                      materiel.offre === "Offre à durée limitée"
                        ? "LimitedOfferP"
                        : "EconomisezP"
                    }
                  >
                    {materiel.offre}
                  </p>
                  <span>{materiel.price.toFixed(2)}€</span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MaterialBody;
