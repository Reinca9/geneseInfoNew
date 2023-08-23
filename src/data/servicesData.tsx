import ForfaitExample from "../assets/forfat.png";

export class Services {
    name: string;
    description: string;
    price: number;
    imageUrl: string;
    fullDescription : string;
    pdfUrl : string;
  
    constructor(name: string, description: string, price: number, imageUrl: string, fullDescription: string, pdfUrl :string) {
      this.name = name;
      this.description = description;
      this.price = price;
      this.imageUrl = imageUrl;
      this.fullDescription = fullDescription;
      this.pdfUrl = pdfUrl;
    }
  }
  export const ServicesList: Services[] = [
    new Services("Forfait telephone", "Forfait ...", 28.00, "ForfaitExample", "Description complète du produit", "pdfUrl"),


  ];