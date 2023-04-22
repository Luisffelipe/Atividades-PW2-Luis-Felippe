import { ComidaDePet } from "./ComidaDePet";

export abstract class PequenoRoedor {
    readonly especie: string;
    felicidade: number = 0;
  
    constructor(especie: string) {
      this.especie = especie;
    }

    abstract comer(comida: ComidaDePet): boolean; 
  
    estaFeliz(): boolean {
      return this.felicidade > 0;
    }
} 
