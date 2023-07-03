
let electrodomesticos: Electrodomestico[] = new Array(10);
let consumos: String[] = ["A", "B", "C", "D", "E", "F"];
let colores: String[] = ["Negro", "Rojo", "Azul", "Gris", "Blanco"];
let randomElectrodomestico: number = 0;
let precioLavadoras: number = 0;
let precioTelevisiones: number = 0;

for (let i = 0; i < electrodomesticos.length; i++) {

    let consumo: String = consumos[Math.floor(Math.random()*consumos.length-1)];
    let color: String = colores[Math.floor(Math.random()*colores.length-1)];
    randomElectrodomestico = Math.floor(Math.random()*3);

    if(randomElectrodomestico == 0)
    {
        
        electrodomesticos[i] = new Electrodomestico(consumo, color);
        electrodomesticos[i].precioFinal();
    }else{
        if(randomElectrodomestico == 1)
        {

            electrodomesticos[i] = new Lavadora(consumo, color);
            electrodomesticos[i].precioFinal();
            precioLavadoras += electrodomesticos[i].getPrecioBase();
        }else{

            electrodomesticos[i] = new Television(consumo, color);
            electrodomesticos[i].precioFinal();
            precioTelevisiones += electrodomesticos[i].getPrecioBase();
        }
    }
}
console.log(electrodomesticos);
console.log("El precio total de todos los electrodomésticos son "+(precioLavadoras+precioTelevisiones)+"€");
console.log("El precio total de las lavadoras son "+precioLavadoras+"€");
console.log("El precio total de las televisiones son "+precioTelevisiones+"€");