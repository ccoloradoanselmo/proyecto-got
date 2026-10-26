export class Personaje {
  #nombre;
  #edad;
  #vivo;
  #casa;

  constructor(nombre = "Desconocido", edad = 0, vivo = true, casa = "Sin casa") {
    this.#nombre = nombre;
    this.#edad = edad;
    this.#vivo = vivo;
    this.#casa = casa;
  }

  // Metodos

  presentacion() {
    console.log(`Soy ${this.#nombre} de la Casa ${this.#casa.getNombre}.`);
  }

  // Getter and Setter
  get getNombre() {
    return this.#nombre;
  }
  set setNombre(nombre) {
    this.#nombre = nombre;
  }

  get getEdad() {
    return this.#edad;
  }
  set setEdad(edad) {
    this.#edad = edad;
  }

  get getVivo() {
    return this.#vivo;
  }
  set setVivo(vivo) {
    this.#vivo = vivo;
  }

  get getCasa() {
    return this.#casa;
  }
  set setCasa(casa) {
    this.#casa = casa;
  }

}