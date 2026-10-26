export class Rey extends Personaje{
    #aniosDeReinado;

    constructor(nombre = "Desconocido", edad = 0, vivo = true, casa = null, aniosDeReinado = 0) {
        super(nombre, edad, vivo, casa);
        this.#aniosDeReinado = aniosDeReinado;
    }

    //Metodos

     luchar(){
        console.log(`${this.nombre} lidera la batalla y anima a sus tropas.`);
    }

    gobernar(){
        console.log(`${this.nombre} gobierna con sabiduría desde hace ${this.aniosDeReinado}`);
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