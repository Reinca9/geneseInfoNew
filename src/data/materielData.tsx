import PCexample from "../assets/portableAsusRog.png";

export class Materiel {
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  fullDescription : string;
  offre : string;
  type : string;

  constructor(name: string, description: string, price: number, imageUrl: string, fullDescription: string, offre: string, type: string) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.imageUrl = imageUrl;
    this.fullDescription = fullDescription;
    this.offre = offre;
    this.type = type;
  }
}

export const materielList: Materiel[] = [
  new Materiel("PC asus", "PC portable gamer ...", 1500.00, PCexample, "Description complète du produit","Offre à durée limitée","PC fixe"),
  new Materiel("PC dell", "PC portable gamer ...", 1500.00, PCexample, "Description complète du produit","Offre à durée limitée","PC portable"),
  new Materiel("RTX", "PC portable gamer ...", 1500.00, PCexample, "Description complète du produit","Economisez 200€","Carte graphique"),
  new Materiel("Imprimante", "PC portable gamer ...", 1500.00, PCexample, "Description complète du produit","Offre à durée limitée"," Péripherique"),
  

];