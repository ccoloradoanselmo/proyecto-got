export class Casa {
  #nombre;
  #lema;
  #miembros;
 
  constructor(nombre = "Sin nombre", lema = "Sin lema", miembros = []) {
    this.#nombre = nombre;
    this.#lema = lema;
    this.#miembros = miembros;
  }

  // Metodos
  nuevoMiembro(miembro){
    this.#miembros.push(miembro);
    miembro.casa = this;
    console.log(`${miembro.nombre} ha sido añadido a la Casa ${this.#nombre}.`);
  }


  // Recorremos cada uno de los miembros con un forEach y visualizamos su nombre
  listarMiembros(){
    console.log(`Miembros de la Casa ${this.#nombre}:\n`);
    this.#miembros.forEach(miembro => {
      console.log(`- ${miembro.nombre}\n`);
    })
  }
  //


  // Getter and Setter
  get nombre() {
    return this.#nombre;
  }
  set nombre(nombre) {
    this.#nombre = nombre;
  }
 
  get lema() {
    return this.#lema;
  }
  set lema(lema) {
    this.#lema = lema;
  }
 
  get miembros() {
    return this.#miembros;
  }
  set miembros(miembros) {
    this.#miembros = miembros;
  }
  //
}