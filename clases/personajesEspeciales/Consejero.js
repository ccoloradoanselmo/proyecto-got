export class Consejero extends Personaje {
    #especialidad;

    constructor(nombre = "Desconocido", edad = 0, vivo = true, casa = null, especialidad = null) {
        super(nombre, edad, vivo, casa);
        this.#especialidad = especialidad;
    }
    
    //Metodos

    luchar() {
        console.log(`${this.nombre} no lucha con sus armas, sino con palabras e inteligencia.`);
    }

    aconsejar(personaje) {
        console.log(`${this.nombre} aconseja a ${personaje.nombre} sobre ${this.#especialidad}`);
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