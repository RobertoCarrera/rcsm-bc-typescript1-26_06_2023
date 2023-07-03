"use strict";
let electrodomesticos = new Array(10);
let consumos = ["A", "B", "C", "D", "E", "F"];
let colores = ["Negro", "Rojo", "Azul", "Gris", "Blanco"];
let randomElectrodomestico = 0;
let precioLavadoras = 0;
let precioTelevisiones = 0;
for (let i = 0; i < electrodomesticos.length; i++) {
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
            precioLavadoras += electrodomesticos[i].getPrecioBase();
        }
        else {
            electrodomesticos[i] = new Television(consumo, color);
            electrodomesticos[i].precioFinal();
            precioTelevisiones += electrodomesticos[i].getPrecioBase();
        }
    }
}
console.log(electrodomesticos);
console.log("El precio total de todos los electrodomésticos son " + (precioLavadoras + precioTelevisiones) + "€");
console.log("El precio total de las lavadoras son " + precioLavadoras + "€");
console.log("El precio total de las televisiones son " + precioTelevisiones + "€");
