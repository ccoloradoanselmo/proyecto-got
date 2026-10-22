class Casa {
  #nombre;
  #lema;
  #miembros;
 
  constructor(nombre = "Sin nombre", lema = "Sin lema", miembros = []) {
    this.#nombre = nombre;
    this.#lema = lema;
    this.#miembros = miembros;
  }
 
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
}