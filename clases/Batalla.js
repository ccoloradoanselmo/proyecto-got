import { Casa } from './Casa.js';
import { Guerrero } from './personajesEspeciales/Guerrero.js';
export class Batalla {
    #casa1
    #casa2
    constructor(casa1 = new Casa("Casa 1"), casa2 = new Casa("Casa 2")) {
        this.#casa1 = casa1;
        this.#casa2 = casa2;
    }

    mostrarGuerrerosMuertosEnBatalla() {
        const guerrerosMuertosCasa1 = this.#casa1.getMiembros.filter(x => x instanceof Guerrero && !x.getVivo);
        const guerrerosMuertosCasa2 = this.#casa2.getMiembros.filter(x => x instanceof Guerrero && !x.getVivo);
        const guerrerosMuertos = guerrerosMuertosCasa1.concat(guerrerosMuertosCasa2);
        console.log(guerrerosMuertos);
    }

    mostrarSupervivientes() {
        const guerrerosVivosCasa1 = this.#casa1.getMiembros.filter(x => x instanceof Guerrero && x.getVivo);
        const guerrerosVivosCasa2 = this.#casa2.getMiembros.filter(x => x instanceof Guerrero && x.getVivo);
        const guerrerosVivos = guerrerosVivosCasa1.concat(guerrerosVivosCasa2);
        console.log(guerrerosVivos);
    }


    enfrentamiento(guerrero1, guerrero2) {
        console.log(`Nuevo enfrentamiento: ${guerrero1.getNombre} vs ${guerrero2.getNombre}`);
        guerrero1.atacar(guerrero2);
        console.log(`${guerrero1.getNombre}: ${guerrero1.getVida} | ${guerrero2.getNombre}: ${guerrero2.getVida}\n\n`);

    }

    iniciarBatalla() {
        // Introduccion
        console.log("Iniciamos la lucha...");
        console.log(`Los guerreros que pelearán de la casa ${this.#casa1.getNombre} serán los siguientes:`);
        const guerrerosCasa1 = this.#casa1.getMiembros.filter(x => x instanceof Guerrero);
        console.log(guerrerosCasa1);
        console.log(`Los guerreros que pelearán de la casa ${this.#casa2.getNombre} serán los siguientes:`);
        const guerrerosCasa2 = this.#casa2.getMiembros.filter(x => x instanceof Guerrero);
        console.log(guerrerosCasa2);
        //

        // Enfrentamientos aleatorios, se sale del bucle hasta que no haya vivos en alguna de las dos casas
        // Math.random() devuelve un numero aleatorio entre 0 y 1
        // Al multiplicarlo por el tamaño del array, obtenemos por ejemplo, 2,789456
        // Al poner | 0 lo trunca, es un pequeño truco
        while (guerrerosCasa1.some(x => x.getVivo) && guerrerosCasa2.some(x => x.getVivo)) {
            const guerrerosVivosCasa1 = guerrerosCasa1.filter(x => x.getVivo);
            const guerrerosVivosCasa2 = guerrerosCasa2.filter(x => x.getVivo);
            const guerrero1 = guerrerosVivosCasa1[Math.random() * guerrerosVivosCasa1.length | 0];
            const guerrero2 = guerrerosVivosCasa2[Math.random() * guerrerosVivosCasa2.length | 0];
            this.enfrentamiento(guerrero1, guerrero2);
        }
        //

        // Comprobar ganador y visualizar
        if (guerrerosCasa1.some(x => x.getVivo)) {
            console.log(`La batalla ha sido ganada por la Casa ${this.#casa1.getNombre}`);
            console.log(guerrerosCasa1);
        } else {
            console.log(`La batalla ha sido ganada por la Casa ${this.#casa2.getNombre}`);
            console.log(guerrerosCasa2);
        }

    }


}