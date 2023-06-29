"use strict";
const defectoResolucion = 20;
const defecto4k = false;
class Television extends Electrodomestico {
    constructor(newConsumo, newColor) {
        super(newConsumo, newColor);
        this.resolucion = defectoResolucion;
        this._4k = defecto4k;
    }
    getResolucion() {
        return this.resolucion;
    }
    get4k() {
        return this._4k;
    }
    precioFinal() {
        let precioFinal = super.precioFinal();
        let aumento = 0;
        let total = 0;
        if (this.resolucion > 40) {
            aumento += (precioFinal * 0.3);
        }
        if (this._4k == true) {
            aumento += 50;
        }
        total = precioFinal + aumento;
        return total;
    }
}
