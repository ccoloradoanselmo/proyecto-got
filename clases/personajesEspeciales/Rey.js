import { Personaje } from './clases/Personaje.js';

export class Rey extends Personaje{
    #aniosDeReinado;

    constructor(nombre = "Desconocido", edad = 0, vivo = true, casa = null, aniosDeReinado = 0) {
        super(nombre, edad, vivo, casa);
        this.#aniosDeReinado = aniosDeReinado;
    }

    //Metodos

     luchar(){
        console.log(`${this.getNombre} lidera la batalla y anima a sus tropas.`);
    }

    gobernar(){
        console.log(`${this.getNombre} gobierna con sabiduría desde hace ${this.#aniosDeReinado} años.`);
    }

    //

    //Getter and Setter
    set setAniosDeReinado(aniosDeReinado) {
        this.#aniosDeReinado = aniosDeReinado;
    }

    get getAniosDeReinado() {
        return this.#aniosDeReinado;
    }
}
