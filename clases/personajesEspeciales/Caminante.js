import { Personaje } from '../Personaje.js';
import { Dragon } from './Dragon.js';
import { Arma } from '../Arma.js';

export class Caminante extends Personaje {
    #vida;
    #poderHelado;

    constructor(nombre = "Desconocido", edad = 0, vivo = true, poderHelado = 60, casa = null) {
        super(nombre, edad, vivo, casa);
        this.#vida = 100;
        this.#poderHelado = poderHelado;
    }

    // Metodos
    atacar(objetivo) {
        console.log(`${this.getNombre} ataca a ${objetivo.getNombre} causando ${this.#poderHelado} puntos de daño.`);
        objetivo.recibirDaño(this.#poderHelado);
    }

    // Comprobamos que "puntos" sea de tipo numérico antes de hacer nada
    recibirDaño(puntos, causante) {
        if (causante instanceof Arma && causante.getMaterial === "acero valyrio") {
            if (typeof puntos === "number" && puntos > 0) {
                this.#vida -= puntos;
                if (this.#vida <= 0) {
                    this.#vida = 0;
                    this.morir();
                }
            } else
                console.log("Los puntos introducidos no son correctos, introduce un número mayor que 0");
        } else if (causante instanceof Dragon && causante.getTipoAtaque === "fuego") {
            this.#vida = 0;
            this.morir();
        } else
            console.log("El ataque no hizo efecto, los Caminantes Blancos solo reciben daño de fuego y de acero valyrio");

    }


    // Getter and Setter
    get getVida() {
        return this.#vida;
    }

    get getPoderHelado() {
        return this.#poderHelado;
    }

    set setVida(vida) {
        this.#vida = vida;
    }

    set setPoderHelado(poderHelado) {
        this.#poderHelado = poderHelado;
    }
}