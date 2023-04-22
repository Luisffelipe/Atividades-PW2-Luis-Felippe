import { ComidaDePet } from "./ComidaDePet";
import { PequenoRoedor } from "./PequenoRoedor";

export class Furao extends PequenoRoedor {
    constructor() {
      super("Furão"); 
    }
  
    cavar(): void {
      this.felicidade ++;
    }
  
    comer(comida: ComidaDePet): boolean {
      return comida === "insetos" || comida === "plantas" || comida === "sementes" || comida === "vegetais";
    }
}