import { Personaje } from './clases/Personaje.js';

export class Consejero extends Personaje {
    #especialidad;

    constructor(nombre = "Desconocido", edad = 0, vivo = true, casa = null, especialidad = null) {
        super(nombre, edad, vivo, casa);
        this.#especialidad = especialidad;
    }

    //Metodos

    luchar() {
        console.log(`${this.getNombre} no lucha con sus armas, sino con palabras e inteligencia.`);
    }

    aconsejar(personaje) {
        console.log(`${this.getNombre} aconseja a ${personaje.getNombre} sobre ${this.#especialidad}.`);
    }

    //

    //Getter and Setter
    set setEspecialidad(especialidad) {
        this.#especialidad = especialidad;
    }

    get getEspecialidad() {
        return this.#especialidad;
    }

}
