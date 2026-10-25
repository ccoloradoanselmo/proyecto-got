//Import de las clases
import { Personaje } from '/clases/Personaje.js';
import { Arma } from '/clases/Arma.js';
import { Reino } from '/clases/Reino.js';
import { Casa } from '/clases/Casa.js';

//Instancias

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
personajeAryaStark.equiparArma(armaAguja);

casaStark.nuevoMiembro(personajeJoySnow);
casaStark.nuevoMiembro(personajeAryaStark);
casaLannister.nuevoMiembro(personajeJaimeLannister);

reinoPoniente.proclamarRey(personajeJaimeLannister);

reinoPoniente.listarCasas();

reinoPoniente.reyActual();

casaStark.listarMiembros();

console.log("Presentaciones:\n");
personajeJoySnow.presentacion();
personajeAryaStark.presentacion();
personajeJaimeLannister.presentacion();

console.log("Armas:\n");
armaGarra.descripcion();
armaAguja.descripcion();


//
