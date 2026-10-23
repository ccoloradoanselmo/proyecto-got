import { Personaje } from './Personaje.js';
import { Arma } from './Arma.js';
import { Reino } from './Reino.js';
import { Casa } from './Casa.js';

//Creacion de variables
const casaStark = new Casa("Stark");
const casaLannister = new Casa("Lannister");

const personajeAryaStark = new Personaje("Arya Stark");
const personajeJoySnow = new Personaje("Joy Snow");
const personajeJaimeLannister = new Personaje("Jaime Lannister");

const armaGarra = new Arma("Garra", 25,"espada");
const armaAguja = new Arma("Aguja", 15, "espada");

const reinoPoniente = new Reino("Poniente");
//

//Procesos

reinoPoniente.agregarCasa(casaStark);
reinoPoniente.agregarCasa(casaLannister);
personajeJoySnow.equiparArma(armaGarra);


//
