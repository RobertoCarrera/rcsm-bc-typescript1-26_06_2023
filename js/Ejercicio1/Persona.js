"use strict";
// Haz una clase llamada Persona que siga las siguientes condiciones
const sexoPorDefecto = "H";
class Persona {
    constructor(newDNI) {
        this.nombre = "";
        this.edad = 0;
        this.DNI = newDNI;
        this.sexo = sexoPorDefecto;
        this.peso = 0;
        this.altura = 0;
    }
}
