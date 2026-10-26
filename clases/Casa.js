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
    miembro.setCasa = this;
    console.log(`${miembro.getNombre} ha sido añadido a la Casa ${this.#nombre}.`);
  }


  // Recorremos cada uno de los miembros con un forEach y visualizamos su nombre
  listarMiembros(){
    console.log(`Miembros de la Casa ${this.#nombre}:\n`);
    this.#miembros.forEach(miembro => {
      console.log(`- ${miembro.getNombre}\n`);
    })
  }
  //


  // Getter and Setter
  get getNombre() {
    return this.#nombre;
  }
  set setNombre(nombre) {
    this.#nombre = nombre;
  }
 
  get getLema() {
    return this.#lema;
  }
  set setLema(lema) {
    this.#lema = lema;
  }
 
  get getMiembros() {
    return this.#miembros;
  }
  set setMiembros(miembros) {
    this.#miembros = miembros;
  }
  //
}