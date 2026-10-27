//Import de las clases
import { Arma } from './clases/Arma.js';
import { Reino } from './clases/Reino.js';
import { Casa } from './clases/Casa.js';
import { Rey } from './clases/personajesEspeciales/Rey.js';
import { Guerrero } from './clases/personajesEspeciales/Guerrero.js';
import { Consejero } from './clases/personajesEspeciales/Consejero.js';


//Instancias

const casaStark = new Casa("Stark");
const casaLannister = new Casa("Lannister");

const armaGarra = new Arma("Garra", 25,"espada");


const personajeJonSnow = new Guerrero("Jon Snow", 21, true, casaStark, armaGarra);
const personajeTyrionLannister = new Consejero("Tyrion Lannister",25, true, casaLannister, "estrategias de pelea");
const personajeRobertBaratheon = new Rey("Robert Baratheon", 26, true, casaLannister, 15);

const reinoPoniente = new Reino("Poniente");
//
//Procesos
reinoPoniente.agregarCasa(casaStark);
reinoPoniente.agregarCasa(casaLannister);

personajeJonSnow.presentacion();
personajeJonSnow.luchar();
personajeJonSnow.entrenar();
personajeTyrionLannister.presentacion();
personajeTyrionLannister.luchar();
personajeTyrionLannister.aconsejar(personajeRobertBaratheon);
personajeRobertBaratheon.presentacion();
personajeRobertBaratheon.gobernar();
personajeRobertBaratheon.luchar();
//
