import { Personaje } from '../Personaje.js';

export class Guerrero extends Personaje {
    #arma;
    #vida;
    constructor(nombre = "Desconocido", edad = 0, vivo = true, casa = null, arma = null, vida = 100) {
        super(nombre, edad, vivo, casa);
        this.#arma = arma;
        this.#vida = vida;
    }

    // Metodos

    equiparArma(arma) {
        this.#arma = arma;
        console.log(`${this.getNombre} ha equipado el arma ${this.#arma.getNombre}.`);
    }

    luchar() {
        console.log(`${this.getNombre} ataca con su ${this.#arma.getNombre}, causando ${this.#arma.getDanio} puntos de daño.`);
    }

    entrenar() {
        console.log(`${this.getNombre} entrena sin descanso para la próxima batalla.`);
    }


    atacar(objetivo) {
        if (objetivo instanceof Guerrero) {
            const daño = Math.floor(this.#arma.getDanio * (0.7 + Math.random() * 0.6)); // entre 70% y 130% del daño base
            console.log(`${this.getNombre} ataca a ${objetivo.getNombre} causando ${daño} puntos de daño`);
            objetivo.recibirDaño(daño);
        }else
            console.log("Solo puede atacar a un Guerrrero...");

    }

    // Comprobamos que "puntos" sea de tipo numérico antes de hacer nada
    recibirDaño(puntos) {
        if (typeof puntos === "number" && puntos > 0) {
            this.#vida -= puntos;
            if (this.#vida <= 0) {
                this.#vida = 0;
                this.morir();
            }
        } else
            console.log("Los puntos introducidos no son correctos, introduce un número mayor que 0");
    }

    //

    //Getter and Setter
    set setArma(arma) {
        this.#arma = arma;
    }

    get getArma() {
        return this.#arma;
    }

    set setVida(vida) {
        this.#vida = vida;
    }

    get getVida() {
        return this.#vida;
    }
}
