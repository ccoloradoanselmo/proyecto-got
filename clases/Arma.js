class Arma {
  #nombre;
  #danio;
  #tipo;
 
  constructor(nombre = "Sin nombre", danio = 0, tipo = "Desconocido") {
    this.#nombre = nombre;
    this.#danio = danio;
    this.#tipo = tipo;
  }
 
  get nombre() {
    return this.#nombre;
  }
  set nombre(nombre) {
    this.#nombre = nombre;
  }
 
  get danio() {
    return this.#danio;
  }
  set danio(danio) {
    this.#danio = danio;
  }
 
  get tipo() {
    return this.#tipo;
  }
  set tipo(tipo) {
    this.#tipo = tipo;
  }
}