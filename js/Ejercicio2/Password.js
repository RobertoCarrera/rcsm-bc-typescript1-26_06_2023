"use strict";
// Haz una clase llamada Password que siga las siguientes condiciones
// - Que tenga los atributos longitud y contraseña Por defecto, la longitud será de 8
// - Los constructores serán los siguientes
// Incluye el método que genere una contraseña aleatoria con esa longitud
const longitudDefault = 8;
class Password {
    constructor() {
        this.longitud = longitudDefault;
        this.password = this.setPassword();
    }
    setPassword() {
        const caracteresPass = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!$%&_";
        let passGenerada = "";
        for (let i = 0; i < this.longitud; i++) {
            passGenerada += caracteresPass.charAt(Math.floor(Math.random() * caracteresPass.length));
        }
        return passGenerada;
    }
    getPassword() {
        console.log(this.password);
    }
}
