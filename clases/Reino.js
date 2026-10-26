import { Rey } from '/clases/personajesEspeciales/Rey.js';

export class Reino {
  #nombre;
  #casas;
  #rey;

  constructor(nombre = "Sin nombre", casas = [], rey = "Sin rey") {
    this.#nombre = nombre;
    this.#casas = casas;
    this.#rey = rey;
  }

  // Metodos

  // Agregamos una nueva casa al reino, casas es un array
  agregarCasa(casa) {
    this.#casas.push(casa);
    console.log(`La Casa ${casa.getNombre} ha sido añadida al Reino ${this.#nombre}.`);
  }

  // Preguntamos por el tipo de Clase utlizada en el objeto "rey", si no es la clase "Rey", no lo coronamos
  proclamarRey(rey) {
    if (rey instanceof Rey) {
      this.#rey = rey;
      console.log(`${rey.getNombre} ha sido proclamado rey de ${this.#nombre}.`);
    } else if (rey.constructor.name === "Personaje") {
      console.log(`${rey.getNombre} no es un Rey...`);
    } else {
      console.log("Eso no es un Rey...");
    }
  }

  reyActual() {
    console.log("Rey actual: \n");
    console.log(`El rey actual es ${this.#rey.getNombre} de la Casa ${this.#rey.getCasa.getNombre}.`);
  }

  // Recorremos con forEach las casa y visualizamos su nombre
  listarCasas() {
    console.log(`Casas del Reino de ${this.#nombre}:\n`);
    this.#casas.forEach(casa => {
      console.log(`- Casa ${casa.getNombre}\n`);
    });
  }

  // Getter and Setter
  get getNombre() {
    return this.#nombre;
  }
  set setNombre(nombre) {
    this.#nombre = nombre;
  }

  get getCasas() {
    return this.#casas;
  }
  set setCasas(casas) {
    this.#casas = casas;
  }

  get getRey() {
    return this.#rey;
  }
  set setRey(rey) {
    this.#rey = rey;
  }
}