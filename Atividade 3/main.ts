import { function1 } from "./quest1";
import { function2 } from "./quest2";
import { function3 } from "./quest3";
import { function4 } from "./quest4";
import { function5 } from "./quest5";
import { function6 } from "./quest6";

let a = ['Gabinete', 'Mousepad', 'Monitor']
let b = ['Gabinete', 'Mouse', 'Monitor']

const cidade = {
    alcunha: "A terra que ensinou a Paraíba a ler.",
    coodenadas: {
      latitude: [6, 53, 24],
      longitude: [38, 33, 43],
    },
    nome: "Cajazeiras",
    estado: "Paraíba",
}

const matriz1 = [
    ["Jogar", "Pokexgames", "Bom"],
    ["Captura", "Shiny", "Caro"],
    ["Rico", "Milionario", "Muito"]
]

const matriz2 = [
    ["Arvore", "Bolo", "Teclado"],
    ["Mouse", "Monitor", "Gabinete"],
    ["Rico", "Milionario", "Processador"]
]

const restaurantes = [
    { cidade: "Cajazeiras", nome: "Burgdega" },
    { cidade: "Sousa", nome: "Dino's" },
    { cidade: "Cajazeiras", nome: "Avenida" },
]

let resultQuest04 = function4(matriz1, matriz2)

// Resultados
    console.log(`01: ` + function1({a, b}));
    let resultQuest02 = function2(a, b); 
    console.log(resultQuest02); 
    console.log(`03: ` + function3(a, b)); 
    console.log("04:") 
    console.log(resultQuest04); 
    console.log(`05: ` + function5(cidade));
    console.log(`06: ` + JSON.stringify(function6(restaurantes)));