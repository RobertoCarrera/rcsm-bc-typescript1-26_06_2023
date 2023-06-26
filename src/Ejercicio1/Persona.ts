// Haz una clase llamada Persona que siga las siguientes condiciones

// Sus atributos son nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura

// Por defecto, todos los atributos menos el DNI serán valores por defecto según su tipo
// 0 números, cadena vacía para String, etc Sexo será hombre por defecto, usa una
// constante para ello

// Instancia al menos tres objetos

type tipoSexo  = "H" | "M";
const sexoPorDefecto = "H";

class Persona{

    private nombre: String;
    private edad: number;
    private DNI: String;
    private sexo: tipoSexo;
    private peso: number;
    private altura: number;

    constructor(newDNI: String){

        this.nombre = "";
        this.edad = 0;
        this.DNI = newDNI;
        this.sexo = sexoPorDefecto;
        this.peso = 0;
        this.altura = 0;
    }
}
