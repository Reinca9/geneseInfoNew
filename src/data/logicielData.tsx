import LogicielExample from "../assets/Win11_Pro_SoftwareShark_1920x1920.jpg";

export class Logiciel {
    name: string;
    description: string;
    price: number;
    imageUrl: string;
    fullDescription : string;
  
    constructor(name: string, description: string, price: number, imageUrl: string, fullDescription: string) {
      this.name = name;
      this.description = description;
      this.price = price;
      this.imageUrl = imageUrl;
      this.fullDescription = fullDescription;
    }
  }
  
  export const logicielList: Logiciel[] = [
    new Logiciel("Windows 11", "PC portable gamer ...", 99.00, "LogicielExample", "Description complète du produit"),
    new Logiciel("Windows 11", "PC portable gamer ...", 99.00, "LogicielExample", "Description complète du produit"),
    new Logiciel("Windows 11", "PC portable gamer ...", 99.00, "LogicielExample", "Description complète du produit"),
    new Logiciel("Windows 11", "PC portable gamer ...", 99.00, "LogicielExample", "Description complète du produit"),
    new Logiciel("Windows 11", "PC portable gamer ...", 99.00, "LogicielExample", "Description complète du produit"),


  ];