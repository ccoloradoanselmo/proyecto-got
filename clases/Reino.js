class Reino {
  #nombre;
  #casas;
  #rey;
 
  constructor(nombre = "Sin nombre", casas = [], rey = null) {
    this.#nombre = nombre;
    this.#casas = casas;
    this.#rey = rey;
  }
 
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
}