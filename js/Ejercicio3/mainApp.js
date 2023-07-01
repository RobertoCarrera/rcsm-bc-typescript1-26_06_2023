"use strict";
let electrodomesticos = [];
let consumos = ["A", "B", "C", "D", "E", "F"];
let colores = ["Negro", "Rojo", "Azul", "Gris", "Blanco"];
let randomElectrodomestico = 0;
for (let i = 0; i < 10; i++) {
    let consumo = consumos[Math.floor(Math.random() * consumos.length - 1)];
    let color = colores[Math.floor(Math.random() * colores.length - 1)];
    randomElectrodomestico = Math.floor(Math.random() * 3);
    if (randomElectrodomestico == 0) {
        electrodomesticos[i] = new Electrodomestico(consumo, color);
        electrodomesticos[i].precioFinal();
    }
    else {
        if (randomElectrodomestico == 1) {
            electrodomesticos[i] = new Lavadora(consumo, color);
            electrodomesticos[i].precioFinal();
        }
        else {
            electrodomesticos[i] = new Television(consumo, color);
            electrodomesticos[i].precioFinal();
        }
    }
}
console.log(electrodomesticos);
