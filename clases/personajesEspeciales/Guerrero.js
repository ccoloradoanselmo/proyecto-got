export class Guerrero extends Personaje {
    #arma;
    constructor(nombre = "Desconocido", edad = 0, vivo = true, casa = null, arma = null) {
        super(nombre, edad, vivo, casa);
        this.#arma = arma;
    }

    // Metodos

    equiparArma(arma) {
        this.#arma = arma;
        console.log(`${this.nombre} ha equipado el arma ${this.#arma.nombre}.`);
    }

    luchar(){
        console.log(`${this.nombre} ataca con su ${this.#arma.nombre}, causando ${this.#arma.danio} puntos`);
    }

    entrenar(){
        console.log(`${this.nombre} entrena sin descanso para la próxima batalla.`);
    }
    
    //

    //Getter and Setter
    set setArma(arma) {
        this.#arma = arma;
    }

    get getArma(){
        return this.#arma;
    }
}