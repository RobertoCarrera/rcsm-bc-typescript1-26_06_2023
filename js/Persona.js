"use strict";
// Haz una clase llamada Persona que siga las siguientes condiciones
// Sus atributos son nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura
// Por defecto, todos los atributos menos el DNI serán valores por defecto según su tipo
// 0 números, cadena vacía para String, etc Sexo será hombre por defecto, usa una
// constante para ello
// Instancia al menos tres objetos
const sexoPorDefecto = "H";
class Persona {
    constructor(newNombre, newEdad, newDNI, newSexo, newPeso, newAltura) {
        this.nombre = "";
        this.edad = 0;
        this.sexo = sexoPorDefecto;
        this.peso = 0;
        this.altura = 0;
        this.nombre = newNombre;
        this.edad = newEdad;
        this.DNI = newDNI;
        this.sexo = newSexo;
        this.peso = newPeso;
        this.altura = newAltura;
    }
}
let persona1 = new Persona("Roberto", 30, "12345678A", "H", 100.1, 1.85);
let persona2 = new Persona("Maria", 22, "87654321B", "M", 65.3, 1.65);
let persona3 = new Persona("Alonso", 32, "12345678Z", "H", 85.1, 1.72);
console.log(persona1, persona2, persona3);
