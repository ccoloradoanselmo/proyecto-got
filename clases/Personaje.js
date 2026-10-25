export class Personaje {
  #nombre;
  #edad;
  #vivo;
  #casa;
  #arma;
 
  constructor(nombre = "Desconocido", edad = 0, vivo = true, casa = null, arma = null) {
    this.#nombre = nombre;
    this.#edad = edad;
    this.#vivo = vivo;
    this.#casa = casa;
    this.#arma = arma;
  }
  // Metodos

  presentacion(){
    console.log(`Soy ${this.#nombre} de la Casa ${this.#casa.nombre}.`)
  }


  // Le equipamos la nueva arma
  equiparArma(arma){
    this.#arma = arma;
    console.log(`${this.#nombre} ha equipado el arma ${this.#arma.nombre}.`)
  }
  //
  
  // Getter and Setter
  get nombre() {
    return this.#nombre;
  }
  set nombre(nombre) {
    this.#nombre = nombre;
  }
 
  get edad() {
    return this.#edad;
  }
  set edad(edad) {
    this.#edad = edad;
  }
 
  get vivo() {
    return this.#vivo;
  } 
  set vivo(vivo) {
    this.#vivo = vivo;
  }
 
  get casa() {
    return this.#casa;
  }
  set casa(casa) {
    this.#casa = casa;
  }
 
  get arma() {
    return this.#arma;
  }
  set arma(arma) {
    this.#arma = arma;
  }
}