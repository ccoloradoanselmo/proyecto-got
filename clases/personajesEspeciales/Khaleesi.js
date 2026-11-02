import { Personaje } from '../Personaje.js';
import { Consejero } from './Consejero.js';
import { Dragon } from './Dragon.js';


export class Khaleesi extends Personaje {
    #arrayDragones;
    #consejero;

    constructor(nombre = "Khaleesi", edad = 0, vivo = true, casa = "Sin casa", arrayDragones = [],
        consejero = new Consejero("Tyrion Lannister", "estrategias de batalla", 22)) {
        super(nombre, edad, vivo, casa);
        this.#consejero = consejero;
        this.#arrayDragones = arrayDragones;
    }


    // Metodos
    // Solo podremos añadir Dragones, y máximo 3 Dragones
    agregarDragon(dragon) {
        if (dragon instanceof Dragon) {
            if (this.#arrayDragones.length < 3) {
                this.#arrayDragones.push(dragon);
            } else {
                console.log(`${this.getNombre} no puede tener más de 3 Dragones...`);
            }
        } else
            console.log(`${dragon} no es un Dragon...`);
    }


    // Getter and Setter
        // Getter and Setter
    get getArrayDragones() {
        return this.#arrayDragones;
    }

    get getConsejero() {
        return this.#consejero;
    }

    set setArrayDragones(arrayDragones) {
        this.#arrayDragones = arrayDragones;
    }

    set setConsejero(consejero) {
        this.#consejero = consejero;
    }
}