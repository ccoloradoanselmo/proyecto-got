import { Personaje } from '/clases/Personaje.js';

export class Guerrero extends Personaje {
    #arma;
    constructor(nombre = "Desconocido", edad = 0, vivo = true, casa = null, arma = null) {
        super(nombre, edad, vivo, casa);
        this.#arma = arma;
    }

    // Metodos

    equiparArma(arma) {
        this.#arma = arma;
        console.log(`${this.getNombre} ha equipado el arma ${this.#arma.getNombre}.`);
    }

    luchar(){
        console.log(`${this.getNombre} ataca con su ${this.#arma.getNombre}, causando ${this.#arma.getDanio} puntos de daño.`);
    }

    entrenar(){
        console.log(`${this.getNombre} entrena sin descanso para la próxima batalla.`);
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