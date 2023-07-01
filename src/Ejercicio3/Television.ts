
const defectoResolucion = 20;
const defecto4k = false;

class Television extends Electrodomestico{

    private resolucion: number;
    private _4k: boolean;

    constructor(newConsumo: String, newColor: String){

        super(newConsumo,newColor);
        this.resolucion = defectoResolucion;
        this._4k = defecto4k;
    }

    getResolucion (): number{

        return this.resolucion;
    }

    get4k (): boolean{

        return this._4k;
    }

    precioFinal (): number{

        let precioFinal = super.precioFinal();
        let aumento = 0;
        let total = 0;

        if(this.resolucion > 40)
        {
            aumento += (precioFinal*0.3);
        }

        if(this._4k == true)
        {
            aumento += 50;
        }

        total = precioFinal + aumento;
        
        this.precioBase += total;

        return total;
    }
}