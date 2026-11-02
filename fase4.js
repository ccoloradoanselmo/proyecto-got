import { Casa } from './clases/Casa.js';
import { Arma } from './clases/Arma.js';
import { Guerrero } from './clases/personajesEspeciales/Guerrero.js';
import { Rey } from './clases/personajesEspeciales/Rey.js';
import { Consejero } from './clases/personajesEspeciales/Consejero.js'
import { Batalla } from './clases/Batalla.js';
import { Caminante } from './clases/personajesEspeciales/Caminante.js';
import { Dragon } from './clases/personajesEspeciales/Dragon.js';
import { Khaleesi } from './clases/personajesEspeciales/Khaleesi.js';

const casaStark = new Casa("Stark", "El invierno se acerca");

const garra = new Arma("Garra", 90, "acero valyrio");
const aguja = new Arma("Aguja", 70);
const hacha = new Arma("Hacha del Norte", 80, "acero valyrio");
const espadaLarga = new Arma("Espada Larga", 85);
const ballesta = new Arma("Ballesta", 75);
const filoRojo = new Arma("Filo Rojo", 88);
const lanzaDeCaza = new Arma("Lanza de Caza", 60, "acero valyrio");

// === GUERREROS DEL EJERCITO DE VIVOS ===
const jon = new Guerrero("Jon Snow", 25, true, casaStark, garra);
const arya = new Guerrero("Arya Stark", 18, true, casaStark, aguja);
const robb = new Guerrero("Robb Stark", 22, false, casaStark, espadaLarga);
const brienne = new Guerrero("Brienne de Tarth", 30, true, casaStark, hacha);

const jaime = new Guerrero("Jaime Lannister", 32, true, casaStark, filoRojo);
const cersei = new Guerrero("Cersei Lannister", 34, true, casaStark, lanzaDeCaza);
const tyrion = new Guerrero("Tyrion Lannister", 30, true, casaStark, ballesta);
const gregor = new Guerrero("Gregor Clegane", 38, true, casaStark, hacha);

const drogon = new Dragon("Drogon", 5, true, "Targaryen", 200, 80, "fuego");
const rhaegal = new Dragon("Rhaegal", 5, true, "Targaryen", 200, 80, "fuego");
const viserion = new Dragon("Viserion", 5, true, "Targaryen", 200, 80, "fuego");

const khaleesi = new Khaleesi("Daenerys Targaryen", 25, true);

khaleesi.agregarDragon(drogon);
khaleesi.agregarDragon(rhaegal);
khaleesi.agregarDragon(viserion);

const ejercitoCaminantes = new Casa("Ejército de Caminantes", "La noche es oscura y alberga horrores");

// Con 16 Caminantes a veces ganan los vivos y otra los muertos, recargar varias veces para comprobar el ganador
for (let i = 1; i <= 16; i++) {
    ejercitoCaminantes.nuevoMiembro(new Caminante(`Caminante ${i}`, 1000, true, 60));
}

// === AÑADIR PERSONAJES A LAS CASAS ===
casaStark.nuevoMiembro(jon);
casaStark.nuevoMiembro(arya);
casaStark.nuevoMiembro(robb);
casaStark.nuevoMiembro(brienne);

casaStark.nuevoMiembro(jaime);
casaStark.nuevoMiembro(cersei);
casaStark.nuevoMiembro(tyrion);
casaStark.nuevoMiembro(gregor);


const batallaFinal = new Batalla();

batallaFinal.batallaFinal(casaStark, khaleesi, ejercitoCaminantes);