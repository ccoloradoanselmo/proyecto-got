export class Reino {
  #nombre;
  #casas;
  #rey;
 
  constructor(nombre = "Sin nombre", casas = [], rey = null) {
    this.#nombre = nombre;
    this.#casas = casas;
    this.#rey = rey;
  }
  //Metodos
  agregarCasa(casa){
    this.#casas.push(casa);
    console.log(`La Casa ${casa.nombre} ha sido añadida al Reino ${this.#nombre}.` )
  }

  proclamarRey(rey){
    this.#rey = rey;
    console.log(`${rey.nombre} ha sido proclamado rey de ${this.#nombre}`);
  }

  reyActual(){
    console.log(`El rey actual es ${this.#rey.nombre} de la Casa ${this.#rey.casa.nombre}`);
  }
  
  listarCasas(){
    console.log(`Casas del Reino de ${this.#nombre}:\n`)
    this.#casas.forEach(casa => {
      console.log(`- Casa ${casa.nombre}\n`);
    })
  }
  // Getter and Setter
  get nombre() {
    return this.#nombre;
  }
  set nombre(nombre) {
    this.#nombre = nombre;
  }
 
  get casas() {
    return this.#casas;
  }
  set casas(casas) {
    this.#casas = casas;
  }
 
  get rey() {
    return this.#rey;
  }
  set rey(rey) {
    this.#rey = rey;
  }
  //
}