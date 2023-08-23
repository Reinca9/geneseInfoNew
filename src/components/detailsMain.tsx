import React from "react";
import { useParams } from "react-router-dom";
import { materielList } from "../data/materielData"; // Adjust the import path accordingly

const Details: React.FC = () => {
  const { name } = useParams<{ name: string }>();

  // Find the matching product based on the name parameter
  const product = materielList.find((materiel) => materiel.name === name);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="materielMainDiv">
      <h1>Details du produit</h1>
      <h2>{product.name}</h2>
      <div>
        <img src={product.imageUrl} alt={product.name} />
      </div>
      {/* Display specific attributes' values */}
      {product.offre}
      <p>{product.price.toFixed(2)}€</p>
    </div>
  );
};

export default Details;





