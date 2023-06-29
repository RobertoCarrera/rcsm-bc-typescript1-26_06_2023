
const defectoCarga = 5;

class Lavadora extends Electrodomestico{

    private carga: number;

    constructor(newConsumo: String, newColor: String){

        super(newConsumo, newColor);
        this.carga = defectoCarga;
    }

    getCarga(): number{

        return this.carga;
    }

    precioFinal(): number{

        let precioFinal = super.precioFinal();
        let aumentoPrecio = 0;
        let total = 0;

        if(this.carga > 30){

            aumentoPrecio = 50;
        }

        total = precioFinal + aumentoPrecio;

        return total;
    }
}