"use strict";
const defectoCarga = 5;
class Lavadora extends Electrodomestico {
    constructor(newConsumo, newColor) {
        super(newConsumo, newColor);
        this.carga = defectoCarga;
    }
    getCarga() {
        return this.carga;
    }
    precioFinal() {
        let precioFinal = super.precioFinal();
        let aumentoPrecio = 0;
        let total = 0;
        if (this.carga > 30) {
            aumentoPrecio = 50;
        }
        total = precioFinal + aumentoPrecio;
        return total;
    }
}
