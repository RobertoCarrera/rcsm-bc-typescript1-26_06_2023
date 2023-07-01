"use strict";
// Crearemos una superclase llamada Electrodoméstico con las siguientes características
// Sus atributos son precio base, color, consumo energético (letras entre A y F) y
// peso Indica que se podrán heredar
// Por defecto, el color será blanco, el consumo energético será F, el precio Base es de
// 100 y el peso de 5 kg Usa constantes para ello
// Los colores disponibles son blanco, negro, rojo, azul y gris No importa si el nombre
// está en mayúsculas o en minúsculas
const precioDefecto = 100;
const colorDefecto = "Blanco";
const consumoDefecto = "F";
const pesoDefecto = 5;
class Electrodomestico {
    constructor(newConsumo, newColor) {
        this.precioBase = precioDefecto;
        this.color = this.comprobarColor(newColor);
        this.consumoEnergetico = this.comprobarConsumoEnergetico(newConsumo);
        this.peso = pesoDefecto;
    }
    // Getters
    getPrecioBase() {
        return this.precioBase;
    }
    getColor() {
        return this.color;
    }
    getConsumo() {
        return this.consumoEnergetico;
    }
    getPeso() {
        return this.peso;
    }
    comprobarConsumoEnergetico(newConsumo) {
        switch (newConsumo) {
            case "A":
                return "A";
                break;
            case "B":
                return "B";
                break;
            case "C":
                return "C";
                break;
            case "D":
                return "D";
                break;
            case "E":
                return "E";
                break;
            default:
                return "F";
                break;
        }
    }
    comprobarColor(newColor) {
        switch (newColor) {
            case "Negro":
                return "Negro";
                break;
            case "Rojo":
                return "Rojo";
                break;
            case "Azul":
                return "Azul";
                break;
            case "Gris":
                return "Gris";
                break;
            default:
                return "Blanco";
                break;
        }
    }
    precioFinal() {
        let precioFinal = 0;
        switch (this.consumoEnergetico) {
            case "A":
                precioFinal += 100;
                break;
            case "B":
                precioFinal += 80;
                break;
            case "C":
                precioFinal += 60;
                break;
            case "D":
                precioFinal += 50;
                break;
            case "E":
                precioFinal += 30;
                break;
            default:
                precioFinal += 10;
                break;
        }
        if (this.peso < 20) {
            precioFinal += 10;
        }
        else {
            if ((this.peso >= 20) && (this.peso < 50)) {
                precioFinal += 50;
            }
            else {
                if ((this.peso >= 50) && (this.peso < 80)) {
                    precioFinal += 80;
                }
                else {
                    precioFinal += 100;
                }
            }
        }
        this.precioBase += precioFinal;
        return precioFinal;
    }
}
