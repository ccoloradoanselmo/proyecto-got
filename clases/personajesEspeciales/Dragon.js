import { Personaje } from '../Personaje.js';
import { Caminante } from './Caminante.js';

export class Dragon extends Personaje {
    #vida;
    #poder;
    #tipoAtaque;

    constructor(nombre = "Desconocido", edad = 0, vivo = true, casa = null, vida = 200, poder = 80, tipoAtaque = "fuego") {
        super(nombre, edad, vivo, casa);
        this.#vida = vida;
        this.#poder = poder;
        this.#tipoAtaque = tipoAtaque;
    }

    // Metodos
    // Si el objetivo es un Caminante Blanco muere al instante
    atacar(objetivo) {
        if (objetivo instanceof Caminante) {
            console.log(`${this.getNombre} ataca al Caminante Blanco ${objetivo.getNombre}.`);
            objetivo.recibirDaño(this.#poder, this);
        } else {
            console.log(`${this.getNombre} ataca a ${objetivo.getNombre} causando ${this.#poder} puntos de daño`);
            objetivo.recibirDaño(this.#poder);
        }


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

    // Getter and Setter
    get getVida() {
        return this.#vida;
    }

    get getPoder() {
        return this.#poder;
    }

    get getTipoAtaque() {
        return this.#tipoAtaque;
    }

    set setVida(vida) {
        this.#vida = vida;
    }

    set setPoder(poder) {
        this.#poder = poder;
    }

    set setTipoAtaque(tipoAtaque) {
        this.#tipoAtaque = tipoAtaque;
    }

}